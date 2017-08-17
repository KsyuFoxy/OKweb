import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
      trigger('blurAnimation', [
          state('stable', style({color: 'white'})),
          state('blur', style({color: '#d0d3d4', transform: 'scale(1, 1)'})),
          transition('blur <=> stable', [
              animate(1000, keyframes([
                style({color: 'white', transform: 'scale(1, 1)', offset: 0.5}),
                style({color: '#d0d3d4', transform: 'scale(1.5, 1.1)', offset: 0.7}),
                style({color: '#d0d3d4', transform: 'scale(1, 0.8)', offset: 0.8}),
                style({color: '#d0d3d4', transform: 'scale(1.1, 1.1)', offset: 1}),
              ]))
            ])
        ]),
        trigger('onLoad', [
          state('show' , style({ opacity: 1 })),
          state('hidden', style({ opacity: 0 })),
          transition('hidden => show', animate('2s'))
      ]),
  ]
})
export class HomeComponent implements OnInit {
    letterNs = [{name: 'O', state: ''}, {name: 'k', state: ''}, {name: 's', state: ''},
               {name: 'a', state: ''}, {name: 'n', state: ''}, {name: 'a', state: ''}];
    letterFs = [{name: 'K', state: ''}, {name: 'o', state: ''}, {name: 'n', state: ''}, {name: 'd', state: ''}, {name: 'r', state: ''},
              {name: 'a', state: ''}, {name: 't', state: ''}, {name: 'i', state: ''}, {name: 'u', state: ''}, {name: 'k', state: ''}];
    state: string = 'stable';
    leftN = 75;
    leftF = 0;
    mobile = false;
    visibility = 'hidden';
    activUrl;
    previousUrl;

    constructor(private router:Router) {
        router.events.subscribe((path:any) => {
            this.activUrl = path.url;
            console.log(this.activUrl)
            });
        router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe(e => {
          console.log('prev:', this.previousUrl);
          this.previousUrl = e;
        });
        }

    ngOnInit() {
        if(this.visibility = 'hidden') {
            setTimeout(() => {
              this.visibility = 'show';
            }, 5000);
        }

        if ( innerWidth < 768) {
            this.mobile = true;
        } else {
            this.mobile = false;
        }
    }

    onResize($event) {
        if (innerWidth < 768) {
        this.mobile = true;
        } else {
            this.mobile = false;
        }
    }

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
