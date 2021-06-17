import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss'],
})
export class NgswitchComponent implements OnInit {
  dkSwitch: string = 'red';

  constructor() {}

  ngOnInit(): void {}

  changeColor(value: string) {
    this.dkSwitch = value;
  }
}
