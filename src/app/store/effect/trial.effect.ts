import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, ActionsSubject } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { withLatestFrom, switchMap } from 'rxjs/operators';
import * as TrialActionType from '../action/trial.action';
import { LoadTrialResultsData } from '../action/trialresults.action';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TrialDataService {

    url: string = 'http://localhost:8080/userRequest/trials';

    constructor(private http: HttpClient, private store: Store<any>) { }

    headers = new HttpHeaders({'Content-Type': 'application/json'});

    saveData(url: string = this.url, body: any) {
        console.log('TRIAL', JSON.stringify(body.payload));

        let payload = JSON.stringify(body.payload);
        return this.http.post(url, payload, {headers: this.headers});
    }
}

@Injectable()
export class TrialDataEffect {

    url: string = 'http://localhost:8080/userRequest/trials';

    constructor(public action$: Actions, public service: TrialDataService, public store$: Store<any>) { }

    @Effect({dispatch: false})
    save$ = this.action$.pipe(
        ofType(TrialActionType.SAVE_TRIAL_DATA),
        withLatestFrom(this.store$.select('trial')),
        switchMap(([trial]) => {
            return this.service.saveData(this.url, trial);
        })
    )
}
