const ADD_TRAINKIT = 'ADD-TRAINKIT';

export function addTrainKitsAC(response) {
    return {
        type: ADD_TRAINKIT,
        response
    }
}

const initialState = {}

export default function trainKits_reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TRAINKIT: 
        return {
            ...state, items: action.response
        }

        default: return state
    }

}