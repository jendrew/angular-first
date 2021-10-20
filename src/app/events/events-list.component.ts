import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  currentlyClickedClickMeButton = 'Currently clicked Click me button';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleEventClicked(data) {
    console.log('ListComponent: event handled! He says:', data);

  }

  handleClickMeClicked(data: any) {
      this.currentlyClickedClickMeButton = data;
  }
}
