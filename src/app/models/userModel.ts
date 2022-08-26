import { InputFormat } from '../const/inputFormat';
import { InterfaceModel } from './InterfaceModel';
import { PropatyInfo } from './propatyInfo';

export class UserModel implements InterfaceModel {
  id: string;
  name: string;
  age: number;
  deptCd: string;
  [key: string]: any;

  /**
   * ユーザーモデル
   */
  constructor() {
    this.id = "0000";
    this.name = "";
    this.deptCd = "";
    this.age = 0
  }

  public getPropatyInfo(): any {

    /**
     * ユーザーIDのプロパティ
     */
    const id_Porp = {
      'elementId': 'userId',
      'elementName': 'userId',
      'require': true,
      'maxLength': 10,
      'minLength': 3,
      'inputFormat': InputFormat.NORMAL
    }

    /**
    * ユーザー名のプロパティ
    */
    const name_Porp = {
      'elementId': 'userName',
      'elementName': 'userName',
      'require': true,
      'maxLength': 10,
      'minLength': 3,
      'inputFormat': InputFormat.NORMAL
    }

    /**
    * ユーザーの年齢プロパティ
    */
    const age_Prop = {
      'elementId': 'userAge',
      'elementName': 'userAge',
      'maxLength': 3,
      'inputFormat': InputFormat.NUMBER_ONLY
    }

    /**
    * ユーザーの所属部署コードのプロパティ
    */
    const deptCd_Prop = {
      'elementId': 'userDeptCd',
      'elementName': 'userDeptCd',
      'maxLength': 5,
      'inputFormat': InputFormat.NUMBER_ONLY
    }

    return {
      'id': id_Porp,
      'name': name_Porp,
      'age': age_Prop,
      'deptCd': deptCd_Prop
    }
  }
}