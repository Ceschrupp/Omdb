import { createStore, applyMiddleware, compose } from 'redux';
import {hashHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';

//import the root reducer

import rootReducer from './reducers/index.jsx'


//create an object for the default data
const defaultState = {
 movies:{
   isFetching: false,
   movies:[],
   error: null,
   movie: null,
 },
users:{
  isFetchingRegister: false,
  isFetchingLogin: false,
  usuario:null,
  estado: null,
 }
};

const enhacers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(thunkMiddleware)));

export default store;
