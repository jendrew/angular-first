import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "../shared/event.model";
import { VoterService } from "./voter.service";

@Component({
    selector: 'session-list',
    templateUrl : './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = []

    constructor(public authService: AuthService, private voterService: VoterService) {}

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
        }
        
    }

    filterSessions(filterBy: string) {
        if (filterBy == 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {return session.level.toLocaleLowerCase() === filterBy})
        }
    }

    sortSessions(sort: string) {
        
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName, this.eventId)
        } else {
            this.voterService.addVoter(session, this.authService.currentUser.userName, this.eventId)
        }
        if (this.sortBy == 'votes') {
            this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName)
    }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length
}

