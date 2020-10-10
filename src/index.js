import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataProvider } from './Context/Context'

// const MyApp = <React.StrictMode><App /></React.StrictMode>
const AppProvider = <DataProvider><App /></DataProvider>
ReactDOM.render(AppProvider, document.getElementById('root'));

serviceWorker.unregister();
