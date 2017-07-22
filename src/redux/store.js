import reducer from './reducers'
import {createStore, combineReducers, compose} from 'redux';
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'

const store = createStore(
    combineReducers({
        reducer,
        form,
        routing: routerReducer,
        defaultState: "defaultState",
    }),
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
export default store