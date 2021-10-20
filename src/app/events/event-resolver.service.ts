import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { EventService, IEvent } from ".";

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id'])
    }
}