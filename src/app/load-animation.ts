import { trigger, state, style, transition, animate } from '@angular/core';

export const slideIn = trigger('slideIn', [
  state('*', style({
    opacity: 0
  })),
  state('in', style({
    opacity: 1
  })),
  state('out',   style({
    opacity: 0
  })),
  transition('* => in', animate('1000ms ease-in')),
  transition('in => out', animate('1000ms ease-in'))
]);
