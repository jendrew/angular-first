import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];
  buttonContent = 'Whaaa?';
  currentlyClickedClickMeButton = 'Currently clicked Click me button';

  constructor(private eventService: EventService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('ListComponent: event handled! He says:', data);
    this.buttonContent = data;

  }

  handleThumbnailClicked(name) {
    this.toastr.success(name);
  }

  handleClickMeClicked(data: any) {
      this.currentlyClickedClickMeButton = data;
  }
}
