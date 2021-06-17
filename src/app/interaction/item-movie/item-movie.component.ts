import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss'],
})
export class ItemMovieComponent implements OnInit {
  @Input() movie: any;
  @Output() eventLike = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  like() {
    this.eventLike.emit(this.movie);
  }
}
