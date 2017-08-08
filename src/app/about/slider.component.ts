import { Component, Input } from '@angular/core';

@Component({
    selector: 'slider',
    template: `
        <div class="slider">
            <input  type="checkbox" [(checked)]="!props.isText" />
            <label (click)='moveRadioButton()'></label>
        </div>
    `,
    styleUrls: ['./slider.component.scss'],
})

export class SliderComponent {
    icons:boolean = true;
    @Input() props;

    moveRadioButton() {
        this.icons = !this.icons;
        this.props.isText = !this.props.isText;
    }

}
