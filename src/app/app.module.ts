import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {myRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import { AuthService } from './user/auth.service';

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
              AuthService,
              ToastrService,
              EventListResolver,
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
