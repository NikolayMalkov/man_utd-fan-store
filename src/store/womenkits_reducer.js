const ADD_WOMENKIT = 'ADD-WOMENKIT';

export function addWomenKitsAC(response) {
    return {
        type: ADD_WOMENKIT,
        response
    }
}

const initialState = {}

export default function womenKits_reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_WOMENKIT: 
        return {
            ...state, items: action.response
        }

        default: return state
    }

}