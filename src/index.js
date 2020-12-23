import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const storeInstance = createStore(
    // This is a reducer... we'll talk about it in a minute, hang on for a second
    () => {
        console.log(`Hey!!! I'm a reducer y'all!!!`);
    },
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
