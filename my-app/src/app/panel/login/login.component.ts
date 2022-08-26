import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Login } from '../../logic/utility/login/login';
import { loginUtility } from '../../logic/utility/login/loginUtility';
import { Utility } from '../../logic/utility/utilty';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * ログイン情報
   */
  private login: Login;

  /**
   * ユーザーID
   */
  public userId: string;

  /**
   * パスワード
   */
  public password: string;

  constructor(private router: Router) {
    this.userId = "";
    this.password = "";
    this.login = new Login();
  }

  ngOnInit(): void {
    this.userId = "";
    Utility.changeHidden('divLink', true);
  }

  /**
   * ユーザーIDを返却
   * @returns ユーザーID
   */
  public getUserId(): string {
    return this.userId;
  }

  /**
   * ログイン処理
   * @returns 
   */
  public loginLogic(): void {
    // アラートクラス属性を取り除く
    Utility.removeAlertClass();

    if (!this.login.checkLogin(this.userId, this.password)) {
      const errInfo = this.login.getErrInfo();

      // アラートクラス属性を付与
      Utility.addErrMsg(errInfo.id, errInfo.msg);

      return;
    }

    // 画面のログイン情報を更新
    loginUtility.overWriteLoginInfo();

    Utility.changeHidden('divLink', false);

    this.router.navigate(['']);
    return;
  }


}
