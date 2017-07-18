import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from './nav.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('blurAnimation', [
          state('stable', style({color: 'white', transform: 'scale(1)'})),
          state('blur', style({color: 'green', transform: 'scale(1.1)'})),
          transition('stable <=> blur', animate('200ms ease-out'))
      ])
  ]
})
export class AppComponent {
    letters = ['S','o', 'm', 'e', 'm', 'e'];
    @ViewChild('blure') blure: ElementRef;
    index: number;
    ls = [{letter: 'S', state: ''}, {letter: 'o', state: ''}, {letter: 'm', state: ''}];
    state: string = 'stable';

    blurText() {
        this.ls[0].state = 'blur';
    }
    backText() {
        this.ls[0].state = 'stable';
    }

  // https://greensock.com/
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
}
