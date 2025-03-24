import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appManulHighlight]',
  standalone: false
})
export class ManulHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

}
