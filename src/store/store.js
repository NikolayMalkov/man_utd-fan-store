import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import kits_reducer from "./kits_reducer";
import training_reducer from "./training_reducer"
import womenkits_reducer from "./womenkits_reducer"


const reducers = combineReducers(
    {
        kits: kits_reducer,
        training: training_reducer,
        womenkits: womenkits_reducer
    },
)

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))