import { Action } from '@ngrx/store';
import { TrialState } from '../state/trial.state'

export const SAVE_TRIAL_DATA = 'Save Trial'
export const SET_TRIAL_DATA = 'Set Trial'

export class SaveTrialData implements Action {
    type: string = SAVE_TRIAL_DATA;

    constructor(public payload: TrialState){}
}

export class SetTrialData implements Action {
    type: string = SET_TRIAL_DATA;

    constructor(public payload: TrialState){}
}

export type TrialAction = SaveTrialData
                        | SetTrialData;