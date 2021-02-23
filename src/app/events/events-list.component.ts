import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';

declare let toastr;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) { }

  buttonContent = 'Whaaa?';

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('ListComponent: event handled! He says:', data);
    this.buttonContent = data;

  }

  handleThumbnailClicked(name) {
    toastr.success(name);
  }
}
