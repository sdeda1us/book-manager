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

//----------------------WATCHER SAGA------------------------------//
function* rootSaga() {
    yield takeEvery('FETCH_BOOKS', fetchBooks);
    yield takeEvery('FETCH_SUBJECTS', fetchSubjects);
    yield takeEvery('FETCH_JOIN', fetchJoin);
    yield takeEvery('POST_BOOK', postBook);
    yield takeEvery('POST_SUBJECT', postSubject);
    yield takeEvery('ERASE_SUBJECT', eraseSubject);
}

//------------------------ACTION SAGAS----------------------------//
function* eraseSubject(action) {
    try {
        yield call(Axios.put, `/book/${action.payload}`)
        yield call(Axios.delete, `/subject/${action.payload}`)
        const response = yield call(Axios.get, '/join')
        yield put({type: 'SET_JOIN', payload: response.data})
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

function* fetchJoin() {
    try {
        const response = yield call(Axios.get, '/join')
        yield put({type: 'SET_JOIN', payload: response.data})
    }catch(error){
        console.log('Error getting subjects from the server', error);
    }
}

function* fetchSubjects() {
    try {
        const response = yield call(Axios.get, '/subject')
        yield put({type: 'SET_SUBJECTS', payload: response.data})
    }catch(error){
        console.log('Error getting subjects from the server', error);
    }
}

function* postBook(action) {
    try {
        const response = yield call(Axios.post, '/book', action.payload)
    }catch(error){
        console.log('Error getting subjects from the server', error);
    }
}

function* postSubject(action) {
    try {
        const response = yield call(Axios.post, '/subject', action.payload)
        //yield put({type: 'SET_SUBJECTS', payload: response.data})
    }catch(error){
        console.log('Error posting new subject to the server', error);
    }
}


//-------------------------REDUCERS------------------------------//
const bookReducer = (state = [], action) => {
    if(action.type === 'SET_BOOKS'){
        return action.payload;
    }
    return state;
}

const joinReducer = (state=[], action) => {
    if(action.type === 'SET_JOIN'){
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

//Create redux store
const storeInstance = createStore(
    combineReducers({
        bookReducer, subjectReducer, joinReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
   
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
