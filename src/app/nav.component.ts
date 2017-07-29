import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'navigation',
  template: `
        <div class='nav-content' (click)="toggleNav()" (mouseover)="changeNavColor($event)" (mouseout)="changeNavColor($event)">
            <div *ngFor='let line of lines' [@NavLinesAnimation]="line.state" [ngClass]="pageNavColor" class='nav-line'></div>
        </div>
        <ul [@NavAnimation]="navState.state">
            <li *ngFor='let page of pages' [routerLink]="page.link" (click)='toggleNav()'>{{page.name}}</li>
        </ul>
    `,
  styles: [`
        .nav-content {
            position: absolute;
            top: 40px;
            right: 75px;
            z-index: 1;
        }
        .nav-line {
            width: 60px;
            height: 3px;
            background-color: #00a19c /*blue*/;
            margin: 10px 0;
        }
        .nav-content:hover {
            cursor: pointer;
        }
        ul {
            position: absolute;
            top: 0;
            right: 0;
            width: 175px;
            height: 87vh;
            background-color: rgba(208, 211, 212, 0.8);;
            margin: 0;
            padding: 120px 20px 0 20px;
            text-align: center;
            z-index: 0;
        }
        li {
            display: block;
            font-family: 'HP Simplified';
            color: #515151;
            margin: 60px 0;
            font-size: 30px;
        }
        li:hover {
            cursor: pointer;
            transform: scale(1.08);
            color: #00a19c;
        }
        .blue {
            background-color: #00a19c;
        }
        .grey {
            background-color: #d0d3d4;
        }
        .white {
            background-color: white;
        }
      `],
  animations: [
      trigger('NavLinesAnimation', [
        state('lines', style({ opacity: 1 })),
        state('closeLine1', style({ transform: 'rotate(45deg)'})),
        state('closeLine2', style({ transform: 'rotate(-45deg)', marginTop: '-10px'})),
        state('closeLine3', style({ opacity: 0, marginTop: '20px' })),
        transition('lines <=> closeLine1, lines <=> closeLine2', animate('500ms ease-in-out')),
        transition('lines => closeLine3', animate('200ms ease-out')),
        transition('closeLine3 => lines', animate('200ms 300ms ease-out'))
    ]),
    trigger('NavAnimation', [
        state('hide', style({right: '-220px'})),
        state('show', style({right: 0})),
        transition('hide => show', animate('400ms ease-in')),
        transition('show => hide', animate('500ms 200ms ease-out'))
    ])
    ]
})
export class NavComponent {
    lines = [{name: '1', state: 'lines'}, {name: '2', state: 'lines'}, {name: '3', state: 'lines'}];
    state: string;
    navState = {state: 'hide'};
    pages = [{name: 'Home',  link: '/'}, {name: 'About',  link: '/about'}, {name: 'Contacts',  link: '/contacts'}];
    link: string;
    pageNavColor: string;
    activUrl: string;

    constructor(private router:Router) {
        router.events.subscribe((path:any) => {
            this.activUrl = path.url;
                if (this.activUrl === '/') {
                    this.pageNavColor = 'blue';
                } else {
                    this.pageNavColor = 'grey';
                }
        });
    }
    toggleNav() {
        this.navState.state = (this.navState.state === 'hide' ? 'show' : 'hide');
        this.lines[0].state = (this.lines[0].state === 'lines' ? 'closeLine1' : 'lines');
        this.lines[1].state = (this.lines[1].state === 'lines' ? 'closeLine2' : 'lines');
        this.lines[2].state = (this.lines[2].state === 'lines' ? 'closeLine3' : 'lines');
    }
    changeNavColor($event, page){
        if (this.activUrl === '/') {
            this.pageNavColor = $event.type == 'mouseover' ? 'grey' : 'blue';            
        } else {
            this.pageNavColor = $event.type == 'mouseover' ? 'blue' : 'grey';
        }
        if (this.navState.state === 'show') {
          this.pageNavColor = $event.type == 'mouseover' ? 'white' : 'blue';
        }
    }

}
