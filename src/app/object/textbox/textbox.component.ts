import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputFormat } from '../../const/inputFormat';
import { PropatyInfo } from '../../models/propatyInfo';
import { Utility } from '../../logic/utility/utilty';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  /**
   * テキストボックスの入力値
   * 親に返す値
   */
  public outputValue: string = "";

  /**
 * テキストボックスの入力値
 */
  public inputValue: string = "";

  /**
   * 入力フォーマット
   */
  public inputFomart = InputFormat.NORMAL;

  /**
   * テキストボックスの初期値
   */
  @Input() public initialValue: string = "";

  /**
   * プロパティ情報
   */
  @Input() public propatyInfo: PropatyInfo = new PropatyInfo();
  /**
   * 親で実行するメソッド名
   */
  @Output() changedValue = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    this.inputValue = this.initialValue;
    this.setPropatyToInputText();
  }

  /**
   * 描画完了後
   */
  ngAfterViewInit(): void{
    this.setPropatyToInputText();
  }
  /**
 * 入力値を変更した
 */
  public changedTextValue() {
    let value: string = this.inputValue;
    this.changedValue.emit(value);
  }

  /**
   * テキストボックスに制御処理を付与する
   * @returns 
   */
  public setPropatyToInputText() {
    let element = document.getElementById(this.propatyInfo.elementId);
    if (element == null || element == undefined) { return; }

    element.setAttribute("maxlength", this.propatyInfo.maxLength.toString());
  }

  /**
   * キープレスイベント（入力制限）
   * @param e 
   * @returns 
   */
  public keyPressEvent(e: any){
    Utility.removeErrMsgAtObject(this.propatyInfo.elementId , this.propatyInfo.elementId + 'ErrAria');

    if(this.propatyInfo.inputFormat == InputFormat.NORMAL){ return;}

    switch(this.propatyInfo.inputFormat){
      case InputFormat.NORMAL:
        break;
      case InputFormat.NUMBER_ONLY:
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        break;
    }
  }

  /**
   * blurイベント
   * @param e 
   * @returns 
   */
  public blurEvent(e: any){
    if(this.propatyInfo.require){
      if(!this.requireIsOk()){
        Utility.addErrMsgAtObject(this.propatyInfo.elementId, this.propatyInfo.elementId + 'ErrAria', '必須入力です');
        //Utility.addErrMsgAtObject(this.propatyInfo.elementId, '必須入力です');
        return;
      }
    }

    this.changedTextValue();
  }
  /**
   * 必須入力チェック
   * @returns true: 正常
   */
  public requireIsOk(): boolean {

    // 必須入力の場合
    if (!this.propatyInfo.require) {
      return true;
    }

    // 入力無
    if (this.inputValue === '') {
      return false;
    }

    return true;
  }

  /**
   * 最大文字数チェック
   * @returns 
   */
  public maxLengthIsOk(): boolean {
    // 無効
    if (0 > this.propatyInfo.maxLength) {
      return true;
    }

    // 入力桁数チェック
    if (this.inputValue.length > this.propatyInfo.maxLength) {
      return false;
    }

    return true;
  }

  /**
 * 最小文字数チェック
 * @returns 
 */
  public minLengthIsOk(): boolean {
    // 無効
    if (0 > this.propatyInfo.minLength) {
      return true;
    }

    // 入力桁数チェック
    if (this.propatyInfo.minLength > this.inputValue.length) {
      return false;
    }

    return true;
  }
}
