import {ACTION} from './actions';

export default function actions(state = {}, action) {
    switch (action.type) {
        case ACTION:
            return Object.assign({}, state, {
                key: action.value
            });
        default:
            return state
    }
}