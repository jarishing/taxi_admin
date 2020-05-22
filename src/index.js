import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Router from './routes';
import Store from './store';
import history from './history';

import 'antd/dist/antd.css';

ReactDOM.render((
    <CookiesProvider>
        <Provider store={Store}>
            <Router history={history}/>
        </Provider>
    </CookiesProvider>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
