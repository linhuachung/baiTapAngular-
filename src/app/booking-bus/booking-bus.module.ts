import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingBusComponent } from './booking-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [BookingBusComponent, DanhSachGheComponent, GheComponent],
  exports: [BookingBusComponent],
  imports: [CommonModule],
})
export class BookingBusModule {}
