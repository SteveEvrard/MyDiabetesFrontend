export interface TrialResultsState {
    results: ResultState[]
}

export interface ResultState {
    id: string,
    title: string,
    distance: string,
    description: string[],
    organization: string,
    startDate: string,
    endDate: string
}

export const mockResult1: ResultState = {
    id: '123456',
    title: 'Diabetes 1 Trial',
    distance: '10 miles',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
    organization: 'Cleveland Clinic',
    startDate: '9/23/2020',
    endDate: '11/29/2020'
}

export const mockResult2: ResultState = {
    id: '654321',
    title: 'Diabetes 2 Trial',
    distance: '25 miles',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
    organization: 'Cleveland Clinic',
    startDate: '7/23/2020',
    endDate: '9/23/2020'
}


export const mockTrialResults: TrialResultsState = {
    results: [mockResult1, mockResult2]
}