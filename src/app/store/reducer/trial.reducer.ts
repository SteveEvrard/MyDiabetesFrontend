import { TrialAction } from '../action/trial.action'
import * as TrialActionTypes from '../action/trial.action'
import { TrialState, initialTrialState } from '../state/trial.state'

export function TrialReducer(state: TrialState = initialTrialState, action: TrialAction) {
    switch(action.type) {
        case TrialActionTypes.SAVE_TRIAL_DATA:
            return action.payload ? action.payload : state;

        default:
            return state;
    }
}