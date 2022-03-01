import { Action } from '@ngrx/store';
import { TrialResultsState } from '../state/trialresults.state'

export const LOAD_TRIAL_RESULTS_DATA = 'Load Trial Results Data';

export class LoadTrialResultsData implements Action {
    type: string = LOAD_TRIAL_RESULTS_DATA;

    constructor(public payload: TrialResultsState){}
}

export type TrialResultsAction = LoadTrialResultsData;