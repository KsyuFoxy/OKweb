import { Component, Input } from '@angular/core';

@Component({
    selector: 'slider',
    template: `
        <div class="slider">
            <input  type="checkbox" [(checked)]="icons" id="slid" />
            <label (click)='moveRadioButton()' for="slid"></label>
        </div>
    `,
    styleUrls: ['./slider.component.scss'],
})

export class SliderComponent {
    icons:boolean = true;
    @Input() aboutText;
    @Input() aboutIcons;
    moveRadioButton() {
        // this.aboutText = !this.aboutText;
        // this.aboutIcons = !this.aboutIcons;
        this.icons = !this.icons;
        if(this.icons) {
            this.aboutText = false;
            this.aboutIcons = true;
        } else {
            this.aboutText = true;
            this.aboutIcons = false;
        }
        console.log(this.icons)
    }

}
