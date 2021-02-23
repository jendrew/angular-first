import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() evel: any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = 'some value';
    starred: boolean = false;

    handleClickMe() {
        console.log('ThumbnailComponent: Click!');
        this.eventClick.emit(this.evel.name);
    }

    logFoo() {
        console.log('foo');
    }

    giveStar() {
        if (this.starred === false) {
            this.starred = true;
        } else {
            this.starred = false;
        }
    }
}
