import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss'],
})
export class TwowayBindingComponent implements OnInit {
  username: string = 'Cybersoft';
  email: string = '';
  fullName: string = '';

  constructor() {}

  ngOnInit(): void {}

  showFullName(value: string) {
    this.fullName = value;
  }
}
