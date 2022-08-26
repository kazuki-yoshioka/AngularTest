import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Login } from './logic/utility/login/login'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  /**
   * ログイン情報
   */
  login: Login;

  userName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.login = new Login();
    this.userName = "";
  }

  ngOnInit() {
    var url = new URL(document.URL);
    var param = url.searchParams.get('var');

    this.loginManager();
  }
  /**
   * リンクボタン押下
   */
  clickLintBtn(btnType: string): void {
    if (btnType === 'list') {
      this.router.navigateByUrl('/list');
    }
    else if (btnType === 'detail') {
      this.router.navigateByUrl('/detail');
    }
  }

  /**
   * ログイン処理
   * @returns 
   */
  public loginManager(){
    if(this.isLogin()) {
      this.userName = this.login.getName();
      return;
    }
    
    this.router.navigateByUrl('/login');
  }

  /**
   * ログイン確認
   * @returns true ログイン中
   */
  public isLogin = () => { return this.login.isLogin(); };
}
