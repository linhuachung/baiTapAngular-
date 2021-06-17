import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild(ListMovieComponent)
  domListMovie: ListMovieComponent = new ListMovieComponent();

  constructor() {}

  ngOnInit(): void {}

  addMovieInteraction(
    maPhim: string,
    tenPhim: string,
    gia: string,
    hinhPhim: string
  ) {
    const movie: any = {
      maPhim,
      tenPhim,
      gia,
      hinhPhim,
    };
    this.domListMovie.addMovie(movie);
  }
}
