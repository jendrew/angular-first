import {Routes} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index';
import {Error404Component} from './errors/404.component';

export const myRoutes: Routes = [
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  
  {
    path: 'user', 
    loadChildren: './user/user.module#UserModule'
  }

];

