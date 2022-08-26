import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  constructor() { }

  @Input() public decptCd: string ="";
  @Output() changeSelected = new EventEmitter<string>();

  selected = {key: '', value: ''};
  items = [
    { key : '',  value : '選択して下さい' },
    { key : '1',  value : '部署A' },
    { key : '2',  value : '部署B' },
    { key : '3',  value : '部署C' }
]
  ngOnInit(): void {
    if(this.decptCd !== ""){
      this.selected = {key: this.decptCd, value: ""}
    }else{
      this.selected = {key: "", value: ""}
    }
  }

  /**
   * 選択値を変更した
   */
  changeSelectedItem() {
    let key:string = this.selected.key;
    this.changeSelected.emit(key);
  }

  public methodTest(): void{
    console.log('test');
  }

  /**
   * アイテムを選択する
   * @param key 選択キー
   */
  public selectingItem(key: string): void{
    this.decptCd = key;
    this.ngOnInit();
    this.changeSelectedItem();
  }
}
