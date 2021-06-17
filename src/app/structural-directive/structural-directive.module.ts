import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, NgswitchComponent, NgforComponent],
  exports: [StructuralDirectiveComponent],
  imports: [CommonModule],
})
export class StructuralDirectiveModule {}
