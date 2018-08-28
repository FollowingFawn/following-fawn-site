import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

//Render out App to the div id root
//Render a method that takes two arguments: 
//1. name of compoent 2. location to where component gets inserted
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
