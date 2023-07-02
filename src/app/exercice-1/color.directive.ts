import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor() {}

  @HostBinding('style.color') public color: string;
  @HostListener('window:keydown', ['$event.key']) private onKeydown(
    key: string
  ): void {
    const keys = {
      ArrowUp: 'red',
      ArrowRight: 'aquamarine',
      ArrowDown: 'lime',
      ArrowLeft: 'orange',
    };

    if (key in keys) this.color = keys[key];
  }
}
