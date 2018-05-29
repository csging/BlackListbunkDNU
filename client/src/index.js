import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css'
import registerServiceWorker from './registerServiceWorker';

//import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
//<BrowserRouter>
<App />
//</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
