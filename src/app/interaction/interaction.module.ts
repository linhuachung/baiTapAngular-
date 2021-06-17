import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { ItemMovieComponent } from './item-movie/item-movie.component';

@NgModule({
  declarations: [InteractionComponent, ListMovieComponent, ItemMovieComponent],
  exports: [InteractionComponent],
  imports: [CommonModule],
})
export class InteractionModule {}
