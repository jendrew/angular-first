import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ISession } from "..";

@Injectable()
export class VoterService {

    constructor(private http: HttpClient){

    }

    addVoter(session: ISession, username: string, eventId: number) {
        session.voters.push(username)
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`
        this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe()
    }

    deleteVoter(session: ISession, username: string, eventId: number) {
        session.voters = session.voters.filter(voter => voter !== username);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`
        this.http.delete('/api/events/').pipe(catchError(this.handleError('addVoter'))).subscribe()
    }

    userHasVoted(session: ISession, username: string) {
        return session.voters.some(voter => voter === username);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error:any): Observable<T> => {
            console.error(error);
            return of(result as T);
            
        }
    }
}