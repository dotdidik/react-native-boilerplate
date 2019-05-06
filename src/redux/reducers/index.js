import { combineReducers } from 'redux';
import datasReducers from './datasReducer'
import newsReducers from './newsReducer';
import sessionReducer from './sessionReducer'
const allReducers = combineReducers({
    datas : datasReducers,
    news : newsReducers,
    sessionReducer
});

export default allReducers;
