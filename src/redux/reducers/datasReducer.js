import { GET_DATA } from '../actionTypes';

export default function datasReducers(state = [], action) {
    switch( action.type ) {
        case GET_DATA:
            return action.datas;
        default:
            return state
    }
}