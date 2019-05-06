import { GET_NEWS, GET_NEWS_SUCCESS } from '../actionTypes';

const initialState = {
    news: [],
    loading: false
}

export default function newsReducers(state = initialState, action) {
    switch( action.type ) {
        case GET_NEWS:
            return {
                ...state,
                loading:true,
                news : [],

            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                loading:false,
                news : action.payload
            }
        default:
            return state
    }
}