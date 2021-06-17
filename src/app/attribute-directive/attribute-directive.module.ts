import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [AttributeDirectiveComponent, NgclassComponent, NgstyleComponent, HighLightDirective],
  exports: [AttributeDirectiveComponent],
  imports: [CommonModule],
})
export class AttributeDirectiveModule {}
