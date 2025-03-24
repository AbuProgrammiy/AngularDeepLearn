import { ElementRef, Renderer2 } from '@angular/core';
import { ManulHighlightDirective } from './manul-highlight.directive';

describe('ManulHighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new ManulHighlightDirective(new (),new Renderer2());
    expect(directive).toBeTruthy();
  });
});
