import { LoginModel } from "../../../models/loginModel";
import { UserModel } from "../../../models/userModel";
import { MockUser } from '../../../mock/mockUser';
import { loginUtility } from './loginUtility'

export class Login {

  /**
   * ログイン情報のモデル
   */
  private loginModel: LoginModel;

  /**エラー情報 */
  private errInfo: { name: string, id: string, msg: string } = { name: '', id: '', msg: '' };

  constructor() {
    this.loginModel = new LoginModel();
  }

  /**
   * ユーザーIDを基にログイン情報をセット
   */
  public setLogionInfo(userId: string) {

    // ユーザー情報を取得
    const user = loginUtility.getUserInfo(userId);

    // ユーザーモデルの値をログインモデルに代入
    this.loginModel['userId'] = user['id'];
    this.loginModel['userName'] = user['name'];


  }

  /**
   * ログイン情報をセッションに保持
   */
  public saveLogionInfoAtSession(): void {
    // ログインモデルをセッションに保持
    for (const key of Object.keys(this.loginModel)) {
      sessionStorage.setItem(key, this.loginModel[key] as string);
    }
  }

  /**
 * セッションからログイン情報を取得
 */
  public fetchLogionInfoAtSession(): void {
    // ログインモデルをセッションに保持
    for (const key of Object.keys(this.loginModel)) {
      const value = sessionStorage.getItem(key);

      if (value == null || value == undefined) {
        continue;
      }
      this.loginModel[key] = value;
    }
  }
  /**
* ログイン中かチェック
*/
  public isLogin(): boolean {
    this.fetchLogionInfoAtSession();
    if (this.loginModel == null) { return false; }
    if (this.loginModel.userId === "" || this.loginModel.userId === "0000") { return false; }

    return true;
  }

  /**
   * ログインチェック
   * @param userId ユーザーID
   * @param password パスワード
   * @returns 
   */
  public checkLogin(userId: string, password: string): boolean {

    if (userId === '') {
      this.errInfo.name = "loginUserId";
      this.errInfo.id = "loginUserId";
      this.errInfo.msg = "ユーザーコードが未入力です。";
      return false;
    }

    // ユーザー情報を取得
    const user = loginUtility.getUserInfo(userId);

    if (user.id === '' || user.id === '0000') {
      this.errInfo.name = "loginUserId";
      this.errInfo.id = "loginUserId";
      this.errInfo.msg = "存在しないユーザーコードです。";
      return false;
    }

    if (password !== '0000') {
      this.errInfo.name = "loginPassword";
      this.errInfo.id = "loginPassword";
      this.errInfo.msg = "パスワードが違います。";
      return false;
    }

    // ログイン情報を取得
    this.setLogionInfo(userId);

    // セッション情報にログイン情報をセット
    this.saveLogionInfoAtSession();

    return true;
  }

  public getName = () => { return this.loginModel.userName; }
  public getId = () => { return this.loginModel.userId; }
  public getErrInfo = () => { return this.errInfo; }
}