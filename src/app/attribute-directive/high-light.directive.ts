import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = 'green';
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') eventHover() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') eventLeave() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }
}
