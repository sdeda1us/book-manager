import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import Axios from 'axios';

const sagaMiddleware = createSagaMiddleware();


function* rootSaga() {
    yield takeEvery('FETCH_BOOKS', fetchBooks);
}

function* fetchBooks() {
    try {
        const response = Axios.get('/book')
        .then(console.log(response.data));
        //yield put({type: 'SET_BOOKS', payload: })
    }catch (error) {
        console.log('Error getting books from server', error);
    }
}

const bookReducer = (state = [], action) => {
    if(action.type === 'SET_BOOKS'){
        return action.payload;
    }
    else return state;
}

const storeInstance = createStore(
    combineReducers({
        bookReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
   
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
