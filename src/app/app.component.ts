import { Component, ElementRef, Input } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    navState: any = {state: 'hide'};

    onClickedOutside($event) {
        this.navState.state = 'hide';
    }
}
