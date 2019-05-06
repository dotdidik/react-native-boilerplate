import * as types from '../actionTypes';
import axios from 'axios';

import firebaseService from '../../components/environment/firebaseConfig'

const apiURL = 'https://learn-rest.herokuapp.com/api/products';
const apiNEWS = 'http://reduxblog.herokuapp.com/api/posts?key=news123';

export const getData = () => {
    return(dispatch) => {
        return axios.get(apiURL)
            .then(res => {
                dispatch(getDatas(res.data.products))
            })
            .catch(err => {
                throw(err)
            }
        )
    }
}

export const getDatas = (datas) => {
    return {
        type: types.GET_DATA,
        datas
    }
}

export const getItemBegin = () => ({
    type: types.GET_NEWS
})

export const getNews = () => {
    return(dispatch) => {
        dispatch(getItemBegin())
        return axios.get(apiNEWS)
            .then(res => {
                dispatch(getAllNews(res.data))
            })
            .catch(err => {
                throw(err)
            })
    }
}

export const getAllNews = (news) => {
    return{
        type: types.GET_NEWS_SUCCESS,
        payload : news
    }
}


//aut firebase
export const signupUser = (email, password) => dispatch => {
    dispatch(sessionLoading())
    firebaseService
        .auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(signupSuccess(user));
            })
            .catch(error => {
                dispatch(sessionError(error.message))
            })
}

export const sessionLoading = () => ({
    type: types.SESSION_LOADING
})

export const signupSuccess = user => ({
    type: types.SIGNUP_SUCCESS,
    user
})

export const sessionError = error => ({
    type: types.SESSION_ERROR,
    error
})

export const loginUser = ( email, password ) => dispatch => {
    dispatch(sessionLoading());
    firebaseService
    .auth()
    .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(sessionSuccess(user));
        })
        .catch(error => {
            dispatch(sessionError(error.message))
        });
}

export const sessionSuccess = user => ({
    type: types.SESSION_SUCCESS,
    user
})

export const sessionRestoring = () => ({
    type: types.SESSION_RESTORING
})

export const sessionLogout = () => ({
    type: types.SESSION_LOGOUT
})

export const restoreSession = () => dispatch => {
    dispatch(sessionLoading());
    dispatch(sessionRestoring());

    firebaseService.auth().onAuthStateChanged(user => {
        if (user){
            dispatch(sessionSuccess(user));
        } else {
            dispatch(sessionLogout())
        }
    })
}

export const logoutUser = () => dispatch => {
    dispatch(sessionLoading());

    firebaseService.auth().signOut()
    .then(() => {
        dispatch(sessionLogout());
    })
    .catch(error => {
        dispatch(sessionError(error.message))
    })
}