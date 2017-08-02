import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'logo',
  template: `
        <a  [routerLink]="['/']">
            <div class="OK-logo" (mouseenter)='logoOver()' (mouseleave)='logoLeave()'>
                <img *ngFor='let img of imgs' [@logoAnimation]='img.imgState' src={{img.src}}>
            </div>
        </a>
    `,
  styleUrls: ['./logo.component.scss'],
  animations: [
    trigger('logoAnimation', [
        state('goK', style({transform: 'skew(-15deg, -15deg)'})),
        state('goO', style({transform: 'skew(15deg, 15deg)'})),
        state('stop', style({transform: 'skew(0, 0)'})),
        transition('goK => stop', [
            animate(500, keyframes([
                style({transform: 'skew(-15deg, -15deg)', offset: 0}),
                style({transform: 'skew(0, 0)', offset: 0.4}),
                style({transform: 'scale(1.2)', offset: 0.7}),
                style({transform: 'scale(1)', offset: 1}),
            ]))
        ]),
        transition('goO => stop', [
            animate(500, keyframes([
                style({transform: 'skew(15deg, 15deg)', offset: 0}),
                style({transform: 'skew(0, 0)', offset: 0.4}),
                style({transform: 'scale(1.2)', offset: 0.7}),
                style({transform: 'scale(1)', offset: 1}),
            ]))
        ]),
        transition('stop => goK', [
            animate(200, keyframes([
              style({transform: 'skew(0, 0)', offset: 0}),
              style({transform: 'skew(-15deg, -15deg)', offset: 1}),
            ]))
        ]),
        transition('stop => goO', [
            animate(200, keyframes([
              style({transform: 'skew(0, 0)', offset: 0}),
              style({transform: 'skew(15deg, 15deg)', offset: 1}),
            ]))
        ])
    ]),
  ]
})
export class LogoComponent {
    imgs = [{src: './src/app/image/O.png', imgState: 'stop'}, {src: './src/app/image/K.png', imgState: 'stop'}];
    imgState: string;
    logoOver() {
        this.imgs[0].imgState = 'goO';
        this.imgs[1].imgState = 'goK';
    }
    logoLeave() {
        this.imgs[0].imgState = 'stop';
        this.imgs[1].imgState = 'stop';
    }
}
