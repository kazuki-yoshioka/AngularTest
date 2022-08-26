export class LoginModel {
  userId: string;
  userName: string;
  deptCd: string;
  deptName: string;
  [key: string]: any;

  /**
   * ログイン情報
   */
  constructor() {
    this.userId = "0000";
    this.userName = "";
    this.deptCd = "";
    this.deptName = "";
  }

  
}