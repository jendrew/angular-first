import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';

export const myRoutes: Routes = [
  {path: 'events', component: EventsListComponent},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];

