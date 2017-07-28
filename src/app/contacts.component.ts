import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'contacts',
  template: `
        <div class="contacts-content">
            <a [routerLink]="['/home']">
                <img class="OK-logo" src="./src/app/image/OK.png">
            </a>
            <h2>Get in touch</h2>
            <div class="divide-line"></div>
            <p> my online profiles on </p>
            <div class="social-icons">
                <img *ngFor="let icon of icons" [src]="'./src/app/image/' + icon.name + '.png'"
                    [@iconAnimation]='icon.state' (mouseenter)='iconOver(icon)' (mouseleave)='iconLeave(icon)'>
            </div>
            <p>Location</p>
            <div class="map">
                <agm-map [latitude]="lat" [longitude]="lng" [zoom]="4" [scrollwheel]="false">
                    <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="marker"></agm-marker>
                </agm-map>
            </div>
        </div>
    `,
  styles: [`
      h2 {
          font-family: 'Haettenschweiler';
          font-size: 60px;
          letter-spacing: 4px;
          margin: 1em 0 0;
          color: #00a19c /*blue*/
      }
      p {
          font-family: 'HP Simplified';
          color: #515151 /*dark-grey*/;
          font-size: 23px;
          margin: 50px 15px 15px;
      }
      .contacts-content {
          position: absolute;
          width: 100%;
          top: 3em;
          text-align: center;
      }
      .OK-logo {
          position: absolute;
          left: 5em;
      }
      .divide-line {
          width: 550px;
          height: 3px;
          margin: 15px auto;
          box-shadow: 9px -3px 5px white;
          background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%)
      }
      .social-icons img {
          margin: 1em;
      }
      .social-icons img:hover {
          transform: scale(1.03);
          cursor: pointer;
      }
      .map {
          width: 70%;
          height: 25em;
          margin: 0 auto;
          border: 2px solid white;
      }
      agm-map {
          height: 100%;
        }
      `],
  animations: [
      trigger('iconAnimation', [
          state('out', style({transform: 'scale(1)'})),
          state('hover', style({transform: 'scale(1.05)'})),
          transition('out => hover', [
              animate(800, keyframes([
                style({transform: 'scale(1.05)', offset: 0.1}),
                style({transform: 'scale(0.8)', offset: 0.5}),
                style({transform: 'scale(1)', offset: 0.8}),
                style({transform: 'scale(1.05)', offset: 1}),
              ]))
          ]),
          transition('hover => out', [
              animate(300, keyframes([
                style({transform: 'scale(1.05)', offset: 0}),
                style({transform: 'scale(1.1)', offset: 0.4}),
                style({transform: 'scale(1.05)', offset: 1}),
              ]))
          ])
    ])
  ]
})
export class ContactsComponent {
    @Input() navLineColor: string;
    icons = [{name: 'Xing', state: ''}, {name: 'Github', state: ''}, {name: 'Skype', state: ''}, {name: 'E-mail', state: ''}];
    state: string = 'out';
    lat: number = 53.551086;
    lng: number = 9.993682;

    iconOver(icon: any) {
        icon.state = 'hover';
        icon.name = icon.name + '_blue';
    }
    iconLeave(icon: any) {
        icon.state = 'out';
        icon.name = icon.name.replace(/_blue/g, "");
    }

}
