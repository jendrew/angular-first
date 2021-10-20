import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { IEvent, ISession } from '..';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean
  filterBy: string = 'all'
  sortBy: string = 'votes'
  
  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
        this.event = data['event'];
        this.addMode = false;
      })
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = maxId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.addMode = false
    })
  }

  cancelAddSession() {
    this.addMode = false
  }

}
