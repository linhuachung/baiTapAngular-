import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onway-binding',
  templateUrl: './onway-binding.component.html',
  styleUrls: ['./onway-binding.component.scss'],
})
export class OnwayBindingComponent implements OnInit {
  fullname: string = 'Dinh Phuc Nguyen';
  age: number = 18;

  constructor() {}

  ngOnInit(): void {}

  eventBinding(value: string) {
    this.fullname = value;
  }
}
