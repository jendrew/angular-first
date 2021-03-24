import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {myRoutes} from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService,
              ToastrService,
              EventRouteActivator,
              {provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event. Are you sure you want to quit? ');
  }
  return true;
}
