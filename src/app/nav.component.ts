import { Component, ElementRef } from '@angular/core';
import { trigger,  state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'navigation',
  template: `
        <div class='nav-content' (click)='showNav()'
                (mouseover)="over ? 'hover-nav' : 'none' ">
            <div *ngFor='let line of lines' [@LineAnime]="line.state" class='nav-line'></div>
        </div>
        <ul *ngIf='nav'>
            <li *ngFor='let page of pages'>{{page}}</li>
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
        .hover-nav {
            background-color: #d0d3d4 /*light-grey*/;
        }
        .nav-content:hover {
            cursor: pointer;
        }
        ul {
            position: absolute;
            top: 0;
            right: 0;
            width: 175px;
            height: 100vh;
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
            color: #00a19c;
        }
      `],
      animations: [
          trigger('LineAnime', [
            state('inactive', style({
              backgroundColor: '#eee',
              transform: 'scale(1)'
            })),
            state('active',   style({
              backgroundColor: '#cfd8dc',
              transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
          ])
        ]
})
export class NavComponent {
    lines = [1, 2, 3];
    nav: boolean = false;
    lineStyle;
    pages = ['Home', 'About', 'Contacts'];

    constructor(el: ElementRef) {
        this.lineStyle = el.nativeElement.getElementsByClassName('nav-line');
    }

    showNav() {
        this.nav = !this.nav;
        if(this.nav) {
            this.lines = [1, 2];
            this.lineStyle[0].style.transform = 'rotate(45deg)';
            this.lineStyle[1].style.transform = 'rotate(-45deg)';
        } else {
            this.lines = [1, 2, 3];
            this.lineStyle[0].style.transform = 'rotate(0)';
            this.lineStyle[1].style.transform = 'rotate(0)';
        }
    }
}
