import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));