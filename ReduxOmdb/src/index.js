// let's go!
import React from 'react';
import {render} from 'react-dom';

//import components
import Main from './components/Main.jsx';
import SingleMoviePreview from './components/SingleMoviePreview.jsx';
import AllMovies from './components/Allmovies.jsx';
import Home from './components/Home.jsx';
import MyAccount from './components/MyAccount.jsx'
import App from './components/App.jsx'
import Login from './components/login.jsx'
//import react router deps
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store.js';

const router=(
    <Provider store ={store}>
	   <Router history={hashHistory}>
		     <Route path='/' component={App}>
			      <IndexRoute component={Home}></IndexRoute>
            <Route path='/AllMovies' component={AllMovies}></Route>
			      <Route path='/movies/:movieId' component={SingleMoviePreview}></Route>
            <Route path='/MyAccount' component={MyAccount}></Route>
            <Route path='/Login' component={Login}></Route>
		      </Route>
	    </Router>
    </Provider>
)



render(router, document.getElementById('root'))
