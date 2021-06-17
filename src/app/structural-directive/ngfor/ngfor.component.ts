import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss'],
})
export class NgforComponent implements OnInit {
  dssv: any = [
    { ten: 'Nguyen', tuoi: 15 },
    { ten: 'Phu', tuoi: 26 },
    { ten: 'Teo', tuoi: 20 },
    { ten: 'Ty', tuoi: 25 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
