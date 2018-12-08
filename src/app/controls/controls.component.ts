import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  // テンプレートで呼び出すためのプロパティを定義
  coffeeForm: FormGroup;
  hotcoldsel = ['あったかーい', 'つめたーい', 'ぬるーい', 'ほっこーり'];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.coffeeForm = this.fb.group({
      name: 'ブレンド',
      taste: 'バランスのよい口当たり',
      hotcold: this.hotcoldsel[0]
    });
  }

}
