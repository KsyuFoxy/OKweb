import { Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[blur-text]'
})
export class BlurTextDirective {
    constructor(private el: ElementRef) {
        console.log('el',  this.el.nativeElement)
    }

    @Input('blur-text') blurText: string;

    @HostListener('mouseenter') onMouseEnter() {
      this.letterText('100px', '#d0d3d4');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.letterText('120px', 'white');
    }

    private letterText(scale: string, color: string) {
      this.el.nativeElement.style.fontSize = scale;
      this.el.nativeElement.style.color = color;
    }
}
