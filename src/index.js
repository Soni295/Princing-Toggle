import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MyApp = <React.StrictMode><App /></React.StrictMode>

ReactDOM.render(MyApp, document.getElementById('root'));

serviceWorker.unregister();
