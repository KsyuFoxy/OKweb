import { Component } from '@angular/core';
import { slideIn } from '../load-animation';

@Component({
  selector: 'about',
  template: `
        <div class="page-content" [@slideIn]='slideInState'>
            <logo></logo>
            <h2>Expirience</h2>
            <div class="divide-line"></div>
            <h3>Skills and Techniques</h3>
            <div *ngIf="aboutText" class="info-rows">
                <div>
                    <h2>Development skills:</h2>
                    <p *ngFor="let p1 of p1s">{{p1}}</p>
                </div>
                <div>
                    <h2>Design:</h2>
                    <p *ngFor="let p2 of p2s">{{p2}}</p>
                    <h2>Tools:</h2>
                    <p *ngFor="let p3 of p3s">{{p3}}</p>
                </div>
            </div>
            <about-icons *ngIf="aboutIcons"></about-icons>
            <button (click)='toIcons()'>to {{button}}</button>
            <div class="slider-wrapper">
                <span>Text</span>
                <slider [(aboutText)]='aboutText' [(aboutIcons)]='aboutIcons'></slider>
                <span>Icons</span>
            </div>
        </div>
    `,
  styleUrls: ['./about.component.scss'],
  animations: [
      slideIn
    ]
})
export class AboutComponent {
    p1s = ['HTML5', 'CSS3', 'SCSS/SASS', 'Git', 'JavaScript', 'Angular2', 'jQuery', 'UI / UX Animation'];
    p2s = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Lightroom'];
    p3s = ['Balsamiq Mockups', 'CMS', 'API', 'Responsive design'];
    aboutText: boolean = true;
    aboutIcons: boolean = false;
    button: string = 'icons';
    slideInState = 'in';

    toIcons() {
        this.aboutText = !this.aboutText;
        this.aboutIcons = !this.aboutIcons;
        this.button = (this.button === 'icons' ? 'text' : 'icons');
    }

}
