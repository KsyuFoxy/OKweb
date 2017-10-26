import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'navigation',
  template: `
        <div (clickOutside)="onClickedOutside($event)" (window:resize)="onResize($event)">
            <div class='nav-icon' (click)="toggleNav()" (mouseover)="changeNavColor($event)" (mouseout)="changeNavColor($event)">
                <div *ngFor='let line of lines' [@NavLinesAnimation]="line.state" [ngClass]="pageNavColor" class='nav-line'></div>
            </div>
            <ul [@NavAnimation]="navState.state">
                <li *ngFor='let page of pages' [routerLink]="page.link" (click)='toggleNav()'>{{page.name}}</li>
            </ul>
        <div>
    `,
  styleUrls: ['./nav.component.scss'],
  animations: [
          trigger('NavLinesAnimation', [
            state('lines', style({ opacity: 1, marginRight: 0 })),
            state('closeLine1Laptop', style({ transform: 'rotate(45deg)', marginRight: '30px', marginTop: '18px' })),
            state('closeLine1Tablet', style({ transform: 'rotate(45deg)', marginRight: '45px', marginTop: '20px' })),
            state('closeLine1Mobile', style({ transform: 'rotate(45deg)', marginRight: '60px', marginTop: '30px' })),
            state('closeLine2', style({ transform: 'rotate(-45deg)', marginTop: '-10px'})),
            state('closeLine3', style({ opacity: 0, right: '30px' })),
            transition('lines <=> *', animate('400ms ease-in-out')),
            transition('lines => closeLine3', animate('150ms ease-out')),
            transition('closeLine3 => lines', animate('150ms 250ms ease-out'))
        ]),
        trigger('NavAnimation', [
            state('hide', style({right: '-220px'})),
            state('show', style({right: 0})),
            transition('hide => show', animate('400ms ease-in')),
            transition('show => hide', animate('500ms 200ms ease-out'))
        ])
    ]
})
export class NavComponent implements OnInit {
    lines = [{name: '1', state: 'lines'}, {name: '2', state: 'lines'}, {name: '3', state: 'lines'}];
    state: string;
    @Input() navState;
    @Output() navStateChange = new EventEmitter();
    pages = [{name: 'Home',  link: '/'}, {name: 'About',  link: '/about'}, {name: 'Contacts',  link: '/contacts'}];
    link: string;
    pageNavColor: string;
    activUrl: string;
    closeMedia1: string;

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
    ngOnInit(){
        if (innerWidth < 480) {
            this.closeMedia1 = 'closeLine1Mobile';
        }
        else if (480 <= innerWidth && innerWidth < 768) {
            this.closeMedia1 = 'closeLine1Tablet';
        }
         else if (768 <= innerWidth ) {
            this.closeMedia1 = 'closeLine1Laptop';
        }
    }
    toggleNav() {
        this.navState.state = (this.navState.state === 'hide' ? 'show' : 'hide');
        this.navStateChange.emit(this.navState);
        this.lines[0].state = (this.lines[0].state === 'lines' ? this.closeMedia1 : 'lines');
        this.lines[1].state = (this.lines[1].state === 'lines' ? 'closeLine2' : 'lines');
        this.lines[2].state = (this.lines[2].state === 'lines' ? 'closeLine3' : 'lines');
    }
    onClickedOutside($event) {
        this.navState.state = 'hide';
        this.lines[0].state = 'lines';
        this.lines[1].state = 'lines';
        this.lines[2].state = 'lines';
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
        if (innerWidth < 480) {
            this.pageNavColor = 'blue';
        }
    }
    onResize($event) {
        if (innerWidth < 480) {
            this.lines[0].state === 'closeLine1Mobile';
        } else if (480 <= innerWidth && innerWidth < 768) {
            this.lines[0].state === 'closeLine1Tablet';

        } else if (768 <= innerWidth ) {
            this.lines[0].state === 'closeLine1Laptop';
        }
    }
}
