import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put, call} from 'redux-saga/effects';
import Axios from 'axios';

const sagaMiddleware = createSagaMiddleware();


function* rootSaga() {
    yield takeEvery('FETCH_BOOKS', fetchBooks);
    yield takeEvery('FETCH_SUBJECTS', fetchSubjects);
}

function* fetchSubjects() {
    try {
        const response = yield call(Axios.get, '/subject')
        yield put({type: 'SET_SUBJECTS', payload: response.data})
    }catch(error){
        console.log('Error getting subjects from the server', error);
    }
}

function* fetchBooks() {
    try {
        const response =  yield call(Axios.get, '/book')
        yield put({type: 'SET_BOOKS', payload: response.data})
    }catch (error) {
        console.log('Error getting books from server', error);
    }
}

const bookReducer = (state = [], action) => {
    if(action.type === 'SET_BOOKS'){
        return action.payload;
    }
    return state;
}

const subjectReducer = (state=[], action) => {
    if(action.type === 'SET_SUBJECTS'){
        return action.payload;
    }
    return state;
}

const newBookReducer = (state=[], action) => {
    if(action.type === 'SET_NEW_BOOK'){
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        bookReducer, subjectReducer, newBookReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
   
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
