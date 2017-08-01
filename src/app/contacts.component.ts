import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'contacts',
  template: `
        <div class="page-content">
            <a  [routerLink]="['/']">
                <div class="OK-logo" (mouseenter)='logoOver()' (mouseleave)='logoLeave()'>
                    <img *ngFor='let img of imgs' [@logoAnimation]='img.imgState' src={{img.src}}>
                </div>
            </a>
            <h2>Get in touch</h2>
            <div class="divide-line"></div>
            <p> my online profiles on </p>
            <div class="social-icons">
                <img *ngFor="let icon of icons" [src]="'./src/app/image/' + icon.name + '.png'"
                    [@iconAnimation]='icon.state' (mouseenter)='iconOver(icon)' (mouseleave)='iconLeave(icon)'>
            </div>
            <div class='loc-letters' (mouseenter)='locationOver()'>
                <div *ngFor='let loc of locs' [@locationAnimation]='loc.locState'>{{loc.name}}
                </div>
            </div>
            <div class="map">
                <agm-map [latitude]="lat" [longitude]="lng" [zoom]="5" [scrollwheel]="false">
                    <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="marker" [opacity] = "markerOpacity"></agm-marker>
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
      p, .loc-letters div {
          font-family: 'HP Simplified';
          color: #515151 /*dark-grey*/;
          font-size: 23px;
          margin: 50px auto 15px;
      }
      .loc-letters {
          width: 83px;
          margin: 50px auto 15px;
          cursor: pointer;
      }
      .loc-letters div {
          display: inline-block;
          position: relative;
          top: 0;
          left: 0;
          margin: 0;
          z-index: 2;
      }
      .page-content {
          position: absolute;
          width: 100%;
          top: 3em;
          text-align: center;
      }
      .OK-logo {
          position: absolute;
          left: 5em;
      }
      .OK-logo img {
          padding: 2px;
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
        agm-marker {
            opacity: 0;
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
    ]),
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
    trigger('locationAnimation', [
        state('down1left', style({color: '#515151', top: '0px', left: '0px', opacity: 1})),
        state('down2left', style({color: '#515151', top: '0px', left: '0px', opacity: 1})),
        state('down1right', style({color: '#515151', top: '0px', left: '0px', opacity: 1})),
        state('down2right', style({color: '#515151', top: '0px', left: '0px', opacity: 1})),
        state('transformation', style({color: '#00a19c', top: '190px', opacity: 0})),
        state('up', style({color: '#515151', top: '0px', left: '0px', opacity: 1})),
        transition('down1left => transformation', [
            animate(1200, keyframes([
              style({color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0}),
              style({color: '#00a19c', top: '190px', left: '20px', opacity: 1, offset: 0.9}),
              style({color: '#00a19c', top: '190px', left: '20px', opacity: 0, offset: 1}),
            ]))
        ]),
        transition('down2left => transformation', [
            animate(1400, keyframes([
              style({color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0}),
              style({color: '#00a19c', top: '190px', left: '10px', opacity: 1, offset: 0.9}),
              style({color: '#00a19c', top: '190px', left: '10px', opacity: 0, offset: 1}),
            ]))
        ]),
        transition('down1right => transformation', [
            animate(1300, keyframes([
              style({color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0}),
              style({color: '#00a19c', top: '190px', left: '-10px', opacity: 1, offset: 0.9}),
              style({color: '#00a19c', top: '190px', left: '-10px', opacity: 0, offset: 1}),
            ]))
        ]),
        transition('down2right => transformation', [
            animate(1100, keyframes([
              style({color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0}),
              style({color: '#00a19c', top: '190px', left: '-20px', opacity: 1, offset: 0.9}),
              style({color: '#00a19c', top: '190px', left: '-20px', opacity: 0, offset: 1}),
            ]))
        ]),
    ]),
  ]
})
export class ContactsComponent {
    imgs = [{src: './src/app/image/O.png', imgState: 'stop'}, {src: './src/app/image/K.png', imgState: 'stop'}];
    imgState: string;
    icons = [{name: 'Xing', state: 'out'}, {name: 'Github', state: 'out'}, {name: 'Skype', state: 'out'}, {name: 'E-mail', state: 'out'}];
    state: string;
    locs = [
        {name: 'L', locState: 'down1left', initial: 'down1left'},
        {name: 'o', locState: 'down2left', initial: 'down2left'},
        {name: 'c', locState: 'down1left', initial: 'down1left'},
        {name: 'a', locState: 'down2left', initial: 'down2left'},
        {name: 't', locState: 'down1right', initial: 'down1right'},
        {name: 'i', locState: 'down2right', initial: 'down2right'},
        {name: 'o', locState: 'down1right', initial: 'down1right'},
        {name: 'n', locState: 'down2right', initial: 'down2right'}
    ];
    locState: string = '';

    lat: number = 53.551086;
    lng: number = 9.993682;
    marker = './src/app/image/Location_blue.png';
    markerOpacity: number;

    logoOver() {
        this.imgs[0].imgState = 'goO';
        this.imgs[1].imgState = 'goK';
    }
    logoLeave() {
        this.imgs[0].imgState = 'stop';
        this.imgs[1].imgState = 'stop';
    }

    iconOver(icon: any) {
        icon.state = 'hover';
        icon.name = icon.name + '_blue';
    }
    iconLeave(icon: any) {
        icon.state = 'out';
        icon.name = icon.name.replace(/_blue/g, "");
    }
    locationOver() {
        this.markerOpacity = 0;
        this.locs.forEach(obj => {
            obj.locState = 'transformation'
        });
        setTimeout (() => {
          this.markerOpacity = 1;
          this.locs.forEach(obj => {
              obj.locState = obj.initial;
          });
      }, 1200);

    }


}
