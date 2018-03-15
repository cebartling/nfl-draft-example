import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery';
import 'popper.js';
import 'bootstrap';

// import configureStore from './store/configure-store';
// import {Provider} from 'react-redux';

// const store = configureStore();

// ReactDOM.render((
//     <Provider store={store}>
//         <App/>
//     </Provider>
// ), document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
