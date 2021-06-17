import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss'],
})
export class NgclassComponent implements OnInit {
  isColor: boolean = false;
  isFont: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
