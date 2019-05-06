import { SESSION_ERROR, SESSION_LOADING, SIGNUP_SUCCESS, SESSION_LOGOUT, SESSION_RESTORING, SESSION_SUCCESS, SESSION_UPDATE } from '../actionTypes';


const initialState = {
    restoring: false,
    loading: false,
    user: {},
    error: null,
    logged: null,
    registered: null
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type){
        case SESSION_RESTORING:
            return {
                ...state,
                restoring: true
            }
        case SESSION_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
                restoring: false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                restoring: false,
                loading: false,
                user: action.user,
                logged: true,
                registered: true,
                error: null
            }
        case SESSION_ERROR:
            return {
                ...state,
                restoring: false,
                loading: false,
                user: null,
                error: action.error,
                logged: null,
                registered: null
            }
        case SESSION_SUCCESS:
        return {
            ...state,
                restoring: false,
                loading: false,
                user: action.user,
                error: null,
                logged: true,
                registered: null
        }
        case SESSION_LOGOUT:
            return initialState
        default:
            return state;
    }
}

export default sessionReducer