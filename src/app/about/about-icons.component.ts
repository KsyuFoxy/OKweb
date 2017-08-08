import { Component } from '@angular/core';

@Component({
  selector: 'about-icons',
  template: `
        <div class="info-icons">
            <div>
                <h2>Development skills:</h2>
                <img *ngFor="let img1 of img1s" [src]="'./src/app/image/html/' + img1 + '.png'">
            </div>
            <div>
                <h2>Design:</h2>
                <img *ngFor="let img2 of img2s" [src]="'./src/app/image/html/' + img2 + '.png'">
                <h2>Tools:</h2>
                <img *ngFor="let img3 of img3s" [src]="'./src/app/image/html/' + img3 + '.png'">
            </div>
        </div>
    `,
  styleUrls: ['./about.component.scss'],
})
export class AboutIconsComponent {
    img1s = ['html5', 'css', 'Sass', 'Git', 'JS', 'Angular2', 'JQuery', 'UI_UX'];
    img2s = ['Ps', 'Ai', 'Id', 'Lr'];
    img3s = ['Balsamiq', 'CMS', 'API', 'Responsive-design'];

}
