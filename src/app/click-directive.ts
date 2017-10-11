import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Directive({selector: '[clickOutside]'})

export class ClickOutside implements OnInit {
    @Output() clickOutside:EventEmitter<Event> = new EventEmitter<Event>();

    constructor(private _el:ElementRef) {
        this.onClickBody = this.onClickBody.bind(this);
    }

    ngOnInit() {
        document.body.addEventListener('click', this.onClickBody);
    }

    private onClickBody(e:Event) {
        if (!this.isClickInElement(e)) {
            this.clickOutside.emit(e);
        }
    }

    private isClickInElement(e:any):boolean {
        var current = e.target;
        do {
            if ( current === this._el.nativeElement ) {
                return( true );
            }
            current = current.parentNode;
        } while ( current );
        return false;
    }
}
