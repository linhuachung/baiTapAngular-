import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnwayBindingComponent } from './onway-binding/onway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataBindingComponent,
    OnwayBindingComponent,
    TwowayBindingComponent,
  ],
  exports: [DataBindingComponent],
  imports: [CommonModule, FormsModule],
})
export class DataBindingModule {}
