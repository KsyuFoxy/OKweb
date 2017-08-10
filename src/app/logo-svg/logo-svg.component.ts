import { Component, Input } from '@angular/core';

@Component ({
    selector: 'logo-svg',
    template: `
        <div class="svg-container">
            <svg version="1.1" id="OK" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 20.7 7.6" style="enable-background:new 0 0 20.7 7.6;" xml:space="preserve">
            <style type="text/css">
            	.logo-path{fill:#d0d3d4;}
            </style>
            <path class="logo-path" d="M0.4,6V1.7c0-0.9,1.4-1.3,4.2-1.3s4.2,0.4,4.2,1.3V6c0,0.4-0.4,0.7-1.2,0.9c-0.8,0.2-1.8,0.3-3,0.3
            	                   C1.8,7.3,0.4,6.9,0.4,6z M5.2,6.1V1.5c0-0.1-0.2-0.2-0.6-0.2S4,1.4,4,1.5v4.6c0,0.1,0.2,0.2,0.6,0.2C5,6.3,5.2,6.2,5.2,6.1z"/>
            <path class="logo-path" d="M20,7.2h-4l-1.4-2.5v2.5h-3.7V0.4h3.7v2.3l1.6-2.3h3.4l-2.3,3.1L20,7.2z"/>
            </svg>
        </div>
    `,
    styleUrls: ['./logo-svg.component.scss'],
})
 export class LogoSVGComponent {
 }
