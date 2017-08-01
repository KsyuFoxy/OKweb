import { Component } from '@angular/core';

@Component ({
    selector: 'logo',
    template: `
        <div class="svg-container" [ngClass]="isHover ? 'animateLogo' : '' " >
            <svg [routerLink]="['/']" (mouseenter)="isHover = !isHover" version="1.1" id="OK-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 20.7 7.6" style="enable-background:new 0 0 20.7 7.6;" xml:space="preserve">
                <style type="text/css">
                    .logo-bg{fill:#D0D3D4;}
                    .logo-path{fill:transparent;}
                </style>
                <path class="logo-bg" d="M0.4,6V1.7c0-0.9,1.4-1.3,4.2-1.3c2.8,0,4.2,0.4,4.2,1.3V6c0,0.4-0.4,0.7-1.2,0.9c-0.8,0.2-1.8,0.3-3,0.3
                    C1.8,7.3,0.4,6.9,0.4,6z M5.2,6.1V1.5c0-0.1-0.2-0.2-0.6-0.2C4.2,1.3,4,1.4,4,1.5v4.6c0,0.1,0.2,0.2,0.6,0.2C5,6.3,5.2,6.2,5.2,6.1z"/>
                <path class="logo-path" d="M4.6,7.5C1.6,7.5,0.2,7,0.2,6V1.7c0-1.1,1.4-1.6,4.5-1.6c3,0,4.4,0.5,4.4,1.6V6c0,0.5-0.5,0.9-1.3,1.2
                    C6.9,7.4,5.9,7.5,4.6,7.5z M4.6,0.6c-3.5,0-4,0.7-4,1.1V6c0,0.3,0.4,1,4,1c1.2,0,2.2-0.1,3-0.3c0.4-0.1,1-0.3,1-0.7V1.7
                    C8.6,1.3,8.1,0.6,4.6,0.6z M4.6,6.6c-0.2,0-0.9,0-0.9-0.5V1.5C3.7,1,4.4,1,4.6,1c0.2,0,0.8,0,0.8,0.5v4.6C5.5,6.6,4.8,6.6,4.6,6.6z
                     M4.2,6c0.1,0,0.2,0,0.4,0c0.2,0,0.3,0,0.3,0V1.6c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0-0.4,0V6z"/>
                <path class="logo-bg" d="M20,7.2H16l-1.4-2.5v2.5h-3.7V0.4h3.7v2.3l1.6-2.3h3.4l-2.3,3.1L20,7.2z"/>
                <path class="logo-path" d="M20.5,7.4h-4.7l-1-1.8v1.8h-4.2V0.2h4.2v1.7L16,0.2h4l-2.5,3.3L20.5,7.4z M16.1,6.9h3.4L17,3.5l2.1-2.8h-2.8
                    l-2,2.8V0.7h-3.2v6.3h3.2V3.7L16.1,6.9z"/>
            </svg>
        </div>
    `,
    styleUrls: ['./logo.component.scss'],
})
 export class LogoComponent {
     isHover: boolean = false;

 }
