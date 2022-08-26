import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../../models/userModel';
import { MockUser } from '../../mock/mockUser';
import { ComboboxComponent } from '../../object/combobox/combobox.component'
import { PropatyInfo } from '../../models/propatyInfo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  /**
   * グローバル変数
   */

  /**
   * ユーザーモデル
   */
  user: UserModel = new UserModel();

  public propatyInfos: any;

  @ViewChild('deptComb')
  private deptCmb: ComboboxComponent = new ComboboxComponent();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.propatyInfos = this.user.getPropatyInfo();
  }

  public getPropaty(key: string): PropatyInfo {
    const prop = this.propatyInfos[key];
    if (prop == null || prop == undefined) {
      return new PropatyInfo();
    }
    return prop;
  }
  /**
   * 初期処理
   */
  ngOnInit(): void {
    let url = new URL(document.URL);
    let userId = url.searchParams.get('userId');

    this.setUser(userId as string);
  }

  /**
   * ユーザーIdを基にユーザー情報をセット
   */
  public setUser(userId: string): void {
    MockUser.mockUsers.forEach(element => {
      if (element.id === userId) {
        this.user = element;
      }
    });
  }

  /**
   * 部署名を変更した
   * @param deptCd 
   */
  public changeSelectedDeptItem(deptCd: string) {
    this.user.deptCd = deptCd;
  }

  /**
 * テキストボックスを変更した
 * @param text 
 */
  public changedValueAtUserName(text: string) {
    this.user.name = text;
  }

  /**
 * テキストボックスを変更した
 * @param text 
 */
   public changedValueAtUserAge(text: string) {
    this.user.age = parseInt(text);
  }
  /**
  * テキストボックスを変更した
  * @param text 
  */
  public changedValueAtUserId(text: string) {
    this.user.id = text;
  }
  public changeDeptCd(): void {
    this.deptCmb.selectingItem('1');
  }
}
