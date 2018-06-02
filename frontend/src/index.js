import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import watcher from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcher);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
