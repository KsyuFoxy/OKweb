import { Component, ElementRef } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // scrollHeight: number;
    //
    // constructor(private elRef: ElementRef) {
    // }
    //
    //  ngAfterViewInit() {
    //      this.scrollHeight = this.elRef.nativeElement.firstChild.children[1].scrollHeight;
    //      var cupture = this.elRef.nativeElement.firstChild.querySelector('p').style.top;
    //
    //      if ( this.scrollHeight > innerHeight) {
    //          cupture =  this.scrollHeight - 10 + 'px'
    //          console.log('cupt', cupture )
    //      }
    //
    //      console.log('el', this.scrollHeight);
    //      console.log('innerHeight', innerHeight)
    // }
}
