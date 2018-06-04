import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './lib/jquery';
import './lib/tether';
import './lib/popperjs';
import 'bootstrap';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
