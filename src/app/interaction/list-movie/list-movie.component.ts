import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ItemMovieComponent } from './../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  @ViewChildren(ItemMovieComponent)
  tagListItemMovie: QueryList<ItemMovieComponent> = new QueryList();

  danhSachPhim: any = [
    {
      maPhim: 1,
      tenPhim: 'Minions',
      gia: '85000',
      hinhAnh: './assets/images/minions.jpg',
    },
    {
      maPhim: 2,
      tenPhim: 'Home',
      gia: '85000',
      hinhAnh: './assets/images/home.jpg',
    },
    {
      maPhim: 3,
      tenPhim: 'Harvie',
      gia: '85000',
      hinhAnh: './assets/images/harvie.jpg',
    },
    {
      maPhim: 4,
      tenPhim: 'Insideout',
      gia: '85000',
      hinhAnh: './assets/images/insideout.jpg',
    },
  ];

  danhSachLike = [
    { maPhim: 1, tenPhim: 'Minions', soLike: 0 },
    { maPhim: 2, tenPhim: 'Home', soLike: 0 },
    { maPhim: 3, tenPhim: 'Harvie', soLike: 0 },
    { maPhim: 4, tenPhim: 'Insideout', soLike: 0 },
  ];

  constructor() {}

  ngOnInit(): void {}

  addMovie(movie: any) {
    this.danhSachPhim.push(movie);
  }

  viewChildren() {
    this.tagListItemMovie.forEach((item: any) => {
      if (item.movie.maPhim === 2) {
        item.movie.gia = 100000;
      }
    });
  }

  likeMovie(movie: any) {
    const movieLike: any = this.danhSachLike.find(
      (item: any) => item.maPhim === movie.maPhim
    );

    movieLike.soLike++;
  }
}
