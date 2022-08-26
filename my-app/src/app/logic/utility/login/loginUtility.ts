import { LoginModel } from "../../../models/loginModel";
import { UserModel } from "../../../models/userModel";
import { MockUser } from '../../../mock/mockUser';
import { Login} from './login'

export class loginUtility {

  /**
   * ログインユーザーの情報を返却する
   * @returns ログインユーザー
   */
  public static getLoginUser(): LoginModel {
    let login: LoginModel = new LoginModel();

    const userId = sessionStorage.getItem('userId');
    return login;
  }

  /**
   * ユーザー情報を取得
   * @param userId ユーザーID
   * @returns ユーザー情報
   */
  public static getUserInfo(userId: string): UserModel {
    let user: UserModel = new UserModel();
    MockUser.mockUsers.forEach(element => {
      if(element.id === userId){
        user = element;
      }
    });
    return user;
  }

  /**
   * セッションにログインユーザー情報をセット
   * @param user 
   */
  public static setLoginInfoToSession(login: LoginModel): void{

    for (const key of Object.keys(login)) {
      sessionStorage.setItem(key, login[key] as string)  
    }
    
  }

  /**
   * 画面のログイン情報を更新
   * @returns 
   */
  public static overWriteLoginInfo(): void{
    let login: Login = new Login();
    login.fetchLogionInfoAtSession();

    let loginInfo = document.getElementById('loginInfo');
    if(loginInfo == null){return;}

    let text = '';
    text += '<p>ユーザーID：' + login.getId() + '</p>'
    text += '<p>名前：' + login.getName() + '</p>'
    loginInfo.innerHTML = text;
  }

}