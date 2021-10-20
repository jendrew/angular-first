import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  EventResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { 
  Toastr, 
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  JQUERY_TOKEN, 
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import {RouterModule} from '@angular/router';
import {myRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateLocationDirective } from './events/create-event';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    ValidateLocationDirective,
    UpvoteComponent
  ],
  providers: [EventService,
              AuthService,
              VoterService,
              {provide: TOASTR_TOKEN, useValue: toastr},
              {provide: JQUERY_TOKEN, useValue: jQuery},
              EventListResolver,
              EventResolver,
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
