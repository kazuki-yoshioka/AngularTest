export class Utility {

  /**
 * アラートクラス取り除く
 * @returns 
 */
  public static removeAlertClass(): void {
    Utility.removeClass("alert");
    Utility.removeClass("alert-danger");

    Utility.removeErrMsg();
  }

    /**
   * エラーメッセージを削除
   * @returns
   */
     public static removeErrMsgAtObject(elementId: string, elementErrId: string):void {
      
      const element = document.getElementById(elementId);
      if (element == null ) { return; }

      if (element.classList.contains("alert")) {
        element.classList.remove("alert");
      }

      if (element.classList.contains("alert-danger")) {
        element.classList.remove("alert-danger");
      }

      const elementErr = document.getElementById(elementErrId);
      if (elementErr == null ) { return; }
  
      if (!elementErr.classList.contains('text-danger')) { return;}

      elementErr.innerHTML = '';
    }

  /**
   * エラーメッセージを削除
   * @returns
   */
  public static removeErrMsg():void {
    const elements = document.getElementsByClassName('text-danger');
    if (elements == null || elements.length == 0) { return; }

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      if (element.classList.contains('text-danger')) {
        element.remove();
      }
    }
  }
  /**
   * 対象のクラス属性と取り除く
   */
  public static removeClass(className : string): void {
    const elements = document.getElementsByClassName(className);
    if (elements == null || elements.length == 0) { return; }

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    }
  }

  /**
   * 対象の要素にアラートクラス属性を追加
   * @param elementId 
   */
  public static addAlertClass(elementId : string){
    Utility.addClass(elementId, "alert");
    Utility.addClass(elementId, "alert-danger");
  }

  /**
   * エラーメッセージを追加
   * @param elementId 
   * @param errMsg 
   */
  public static addErrMsg(elementId : string, errMsg: string){
    Utility.addAlertClass(elementId);
    let element = document.getElementById('errMsgArea');
    if (element == null) { return; }

    const errHtmlText = '<p name="errMsg" class="text-danger" style="height:20%;">' + errMsg + '</p>';
    element.innerHTML += errHtmlText;
  }

   /**
   * エラーメッセージを追加
   * @param elementId 
   * @param errMsg 
   */
    public static addErrMsgAtObject(objectId : string, errSpanId : string, errMsg: string){
      Utility.addAlertClass(objectId);
      let element = document.getElementById(errSpanId);
      if (element == null) { return; }
  
      //const errHtmlText = '<p name="errMsg" class="text-danger" style="height:20%;">' + errMsg + '</p>';
      element.innerHTML += errMsg;
    }

  /**
   * クラスを追加
   * @param elementId 要素のID
   * @param addClassName 追加するクラス属性名
   * @returns 
   */
  public static addClass(elementId : string, addClassName: string){
    const element = document.getElementById(elementId);
    if (element == null) { return; }

    element.classList.add(addClassName);
  }

  /**
   * 要素の表示、非表示を切り替える
   * @param elementId 要素名
   * @param hidden true: 非表示に設定
   * @returns 
   */
  public static changeHidden(elementId : string, hidden: boolean){
    const element = document.getElementById(elementId);
    if (element == null) { return; }

    element.style.display = hidden ? 'none': 'block';
  }
}