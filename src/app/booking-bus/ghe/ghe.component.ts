import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() chair: any;
  @Output() evntChoose = new EventEmitter();
  status: boolean =false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.chair)
  }
  choose() {
    if(!this.chair.TrangThai){
      this.evntChoose.emit(this.chair);
    }
  }
}
