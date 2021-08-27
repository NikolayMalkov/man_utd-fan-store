const ADD_KITS = 'ADD-KITS';

export function addKitsAC(response) {
    return {
        type: ADD_KITS,
        response
    }
}

const initialState = {}

export default function kits_reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_KITS: 
        return {
            ...state, items: action.response
        }

        default: return state
    }

}