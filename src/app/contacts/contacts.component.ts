import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { slideIn } from '../load-animation';
import { MapsAPILoader } from '@agm/core';
declare var google:any;

@Component({
  selector: 'contacts',
  template: `
        <div class="page-content" [@slideIn]='slideInState'>
            <logo></logo>
            <h2>Get in touch</h2>
            <div class="divide-line"></div>
            <p> my online profiles and contacts </p>
            <div class="social-icons">
                <a *ngFor="let icon of icons" ng-href="icon.link">
                    <img [src]="'./src/app/image/' + icon.name + '.png'" (click)='needNewTab(icon)'
                         [@iconAnimation]='icon.state' (mouseenter)='iconOver(icon)' (mouseleave)='iconLeave(icon)'>
                </a>
            </div>
            <div class='loc-letters' (mouseenter)='locationOver()'>
                <div *ngFor='let loc of locs' [@locationAnimation]='loc.locState' [@locationAnimation]='loc.colorState'>{{loc.name}}
                </div>
            </div>
            <div class="map">
                <agm-map [latitude]="lat" [longitude]="lng" [zoom]="5" [scrollwheel]="false">
                    <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="marker" [opacity] = "markerOpacity"   ></agm-marker>
                </agm-map>
            </div>
            <p class="cupture">This site was built using Angular 2 and styled with SCSS</p>
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
        state('blinkGrey', style({color: "#515151"})),
        state('blinkBlue', style({color: '#00a19c'})),
        transition('blinkGrey <=> blinkBlue', [animate('100ms ease-in-out')]),
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
    slideIn
  ]
})
export class ContactsComponent implements OnInit {
    icons = [
        {name: 'Xing', state: 'out', link: 'http://www.xing.com/profile/Oksana_Kondratiuk', newTab: 'yes'},
        {name: 'Github', state: 'out', link: 'http://github.com/KsyuFoxy', newTab: 'yes'},
        {name: 'Skype', state: 'out', link: 'skype:oksana.o.k.?chat', newTab: 'no'},
        {name: 'E-mail', state: 'out', link: 'mailto:ksyu@web.de', newTab: 'no'}
    ];

    state: string;
    locs = [
        {name: 'L', locState: 'down1left', initial: 'down1left', colorState: ''},
        {name: 'o', locState: 'down2left', initial: 'down2left', colorState: ''},
        {name: 'c', locState: 'down1left', initial: 'down1left', colorState: ''},
        {name: 'a', locState: 'down2left', initial: 'down2left', colorState: ''},
        {name: 't', locState: 'down1right', initial: 'down1right', colorState: ''},
        {name: 'i', locState: 'down2right', initial: 'down2right', colorState: ''},
        {name: 'o', locState: 'down1right', initial: 'down1right', colorState: ''},
        {name: 'n', locState: 'down2right', initial: 'down2right', colorState: ''}
    ];
    locState: string = '';
    lat: number = 53.551086;
    lng: number = 9.993682;
    colorState: string = '';

    marker = './src/app/image/Location_blue.png';
    markerOpacity: number;
    slideInState = 'in';
 constructor(private mapsAPILoader:MapsAPILoader) {}

    ngOnInit() {
        this.changeLocationColor();
    }
    changeLocationColor() {
        this.locs.forEach(function(letter, i) {
            setInterval(function() {
                letter.colorState = 'blinkGrey';
                var blueLetters = setInterval(function(){
                    letter.colorState = 'blinkBlue';
                }, i*150+200);
                setInterval(function(){
                    letter.colorState = 'blinkGrey';
                    clearInterval(blueLetters);
                }, i*150+400)
            }, 5000)
        })
    }

    needNewTab(icon) {
        if (icon.newTab === 'yes') {
            window.open(icon.link, '_blank');
            return false;
        } else {
            window.open(icon.link, '_self');
        }
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
            obj.locState = 'transformation';
        });
        setTimeout (() => {
          this.markerOpacity = 1;
          this.locs.forEach(obj => {
              obj.locState = obj.initial;
          });
      }, 1200);

      this.mapsAPILoader.load().then(() => {
          let bounds = new google.maps.LatLngBounds();
          var markerPosition = {lat: 0, lng: 0};
      })
    }


}
