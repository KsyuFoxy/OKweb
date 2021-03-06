import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('NavContainerAnimation', [
          state('small', style({height: '85px', width: '115px'})),
          state('big', style({height: '100vh', width: '215px'})),
          transition('small => big', animate('1ms ease-in')),
          transition('big => small', animate('1ms 700ms ease-out'))
      ])
  ]
})
export class AppComponent {
        navContainerState: any = {state: 'small'};
        navState: any = {state: 'hide'};
        toggleNavContainer() {
            if (this.navState.state === 'hide') {
                this.navContainerState.state = 'small';
            } else {
                this.navContainerState.state = 'big';
            }
        }
        onClickedOutsideNavContainer($event) {
            this.navContainerState.state = 'small';
        }
}
