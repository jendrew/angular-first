import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  currentlyClickedClickMeButton = 'Currently clicked Click me button';

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleEventClicked(data) {
    console.log('ListComponent: event handled! He says:', data);

  }

  handleThumbnailClicked(name) {
    this.toastr.success(name);
  }

  handleClickMeClicked(data: any) {
      this.currentlyClickedClickMeButton = data;
  }
}
