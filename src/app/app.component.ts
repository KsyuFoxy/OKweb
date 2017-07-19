import { Component, HostListener } from '@angular/core';
import { NavComponent } from './nav.component';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('blurAnimation', [
          state('stable', style({color: 'white'})),
            // transition('stable => blur', animate('200ms ease-out')),
          state('blur', style({color: '#d0d3d4', transform: 'scale(1, 1)'})),
          transition('blur <=> stable', [
              animate(1000, keyframes([
                style({color: 'white', transform: 'scale(1, 1)', offset: 0.5}),
                style({color: '#d0d3d4', transform: 'scale(1.5, 1.1)', offset: 0.7}),
                style({color: '#d0d3d4', transform: 'scale(1, 0.8)', offset: 0.8}),
                style({color: '#d0d3d4', transform: 'scale(1.1, 1.1)', offset: 1}),
              ]))
            ])
    ])
  ]
})
export class AppComponent {
    letterNs = [{name: 'C', state: ''}, {name: 'o', state: ''}, {name: 'n', state: ''},
               {name: 't', state: ''}, {name: 'e', state: ''}, {name: 'n', state: ''}, {name: 't', state: ''}];
   letterFs = [{name: 'D', state: ''}, {name: 'e', state: ''}, {name: 'f', state: ''}, {name: 'i', state: ''}, {name: 'n', state: ''},
              {name: 'i', state: ''}, {name: 't', state: ''}, {name: 'i', state: ''}, {name: 'o', state: ''}, {name: 'n', state: ''}];
    state: string = 'stable';
    leftN = 75;
    leftF = 0;
    constructor() {}

    letteNLeft(i: number) {
        return this.leftN + i*55 + 'px';
    }
    letteFLeft(i: number) {
        return this.leftF + i*55 + 'px';
    }
    blurText(letter: any) {
        letter.state = 'blur';
    }
    backText(letter: any) {
        letter.state = 'stable';
    }

}
