import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import rootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store