export interface TrialState {
    condition: string,
    comments: string,
    age: string,
    sex: string,
    acceptsHealthyVolunteers: boolean,
    userCountry: string,
    state: string,
    city: string,
    phase: string[],
    startDate: string,
    endDate: string,
    travelDistanceImportance: number,
    timingOfTrialImportance: number,
    allowDoubleBlind: boolean
}

export const initialTrialState: TrialState = {
    condition: '',
    comments: '',
    age: '',
    sex: '',
    acceptsHealthyVolunteers: null,
    userCountry: '',
    state: '',
    city: '',
    phase: [],
    startDate: '',
    endDate: '',
    travelDistanceImportance: null,
    timingOfTrialImportance: null,
    allowDoubleBlind: null
}