import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '.';


@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() clickMeClicked = new EventEmitter();
    starred: boolean = false;

    handleClickMe() {
        console.log('ThumbnailComponent: Click!');
        this.clickMeClicked.emit(this.event.name);
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
