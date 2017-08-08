import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'contacts',
  template: `
        <div class="page-content">
            <logo></logo>
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
  styleUrls: ['./contacts.component.scss'],
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