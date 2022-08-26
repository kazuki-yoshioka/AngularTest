import { FactoryTarget } from '@angular/compiler';
import { Input, Type } from '@angular/core';
import { InputFormat } from '../const/inputFormat';

export class PropatyInfo {

  /**
   * エレメントID
   */
  public elementId: string = '';

  /**
   * エレメントClass
   */
  public elementClass: string = '';

  /**
   * エレメント名
   */
  public elementName: string = '';

  /**
   * 必須入力
   */
  public require: boolean = false;

  /**
   * 最大入力文字数
   */
  public maxLength: number = 25600;

  /**
   * 最小入力文字数
   */
  public minLength: number = 0;

  /**
   * プレースフォルダー
   */
  public placeholder:string = "";
  /**
   * 入力フォーマット
   */
  public inputFormat = InputFormat.NORMAL;

  [key: string]: any;

  /**
   * ユーザーモデル
   */
  constructor() {
    this.elementId = "";
    this.elementName = "";
    this.elementClass = "";
    this.require = false;
    this.maxLength = 25600;
    this.minLength = 0;
    this. placeholder = "";
    this. inputFormat = InputFormat.NORMAL;
  }

}