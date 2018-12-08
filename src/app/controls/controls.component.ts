import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  // テンプレートで呼び出すためのプロパティを定義
  coffeeForm: FormGroup;
  hotColdSel = ['あったかーい', 'つめたーい', 'ぬるーい', 'ほっこーり'];
  addSel = ['Milk', 'Sugar'];
  nutSel = ['ピーナッツ', 'アーモンド', 'くるみ'];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.coffeeForm = this.fb.group({
      name: 'ブレンドC',
      taste: 'バランスのよい口当たり',
      hotCold: this.hotColdSel[0],
      adds: this.fb.array([]),
      nut: this.nutSel[0]
    });
  }

  // チェックボックスの処理
  onCheckChanged(item: string, isChecked: boolean) {
    // addsの状態を取得
    const formArray = <FormArray>this.coffeeForm.controls.adds;
      if (isChecked) {
        // チェックがついているときは、formArrayに要素を追加
        formArray.push(new FormControl(item));
      } else {
          // チェックがついていないときは、formArrayから要素を削除
          const index = formArray.controls.findIndex(
            element => element.value === item);
          formArray.removeAt(index);
        }
      }
}
