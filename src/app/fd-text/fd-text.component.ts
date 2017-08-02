import { Component } from '@angular/core';

@Component ({
    selector: 'fd-text',
    templateUrl: './fd-text.component.html',
    styleUrls: ['./fd-text.component.scss'],
})
 export class FDTextComponent {
     isHover: boolean = false;

    //  textOver(event) {
    //          this.isHover = true;
    //          console.log(event.fromElement);
    //          setTimeout( function(){
    //              this.isHover = false;
    //              console.log(event.fromElement);
    //          }, 2100);
    //  }

 }
