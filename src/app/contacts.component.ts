import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'contacts',
  template: `
        <div class="contacts-content">
            <img class="OK-logo" src="./src/app/image/OK.png">
            <h2>Get in touch</h2>
            <div class="divide-line"></div>
            <p> my online profiles on </p>
            <div class="social-icons">
                <img *ngFor="let icon of icons" src={{icon.path}} [@iconAnimation]='icon.state'
                    (mouseenter)='blurText(icon)' (mouseleave)='backText(icon)'>
            </div>
            <p>Location</p>
            <div class="map"></div>
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
          background-color: grey;
      }
      `],
  animations: [
      trigger('iconAnimation', [
          state('notHover', style({color: 'white'})),
          state('blurI', style({color: '#d0d3d4', transform: 'scale(1, 1)'})),
          transition('blurI <=> notHover', [
              animate(1000, keyframes([
                style({color: 'white', transform: 'scale(1, 1)', offset: 0.5}),
                style({color: '#d0d3d4', transform: 'scale(1.5, 1.1)', offset: 0.7}),
                style({color: '#d0d3d4', transform: 'scale(1, 0.8)', offset: 0.8}),
                style({color: '#d0d3d4', transform: 'scale(1.1, 1.1)', offset: 1}),
              ]))
            ])
    ])
  ]
})
export class ContactsComponent {
    icons = [{path: './src/app/image/Xing.png', state: ''}, {path: './src/app/image/Github.png', state: ''},
            {path: './src/app/image/Skype.png', state: ''}, {path: './src/app/image/E-mail.png', state: ''}];
    state: string = 'notHover'

    blurText(letter: any) {
        letter.state = 'blurI';
    }
    backText(letter: any) {
        letter.state = 'notHover';
    }

}
