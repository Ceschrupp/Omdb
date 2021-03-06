import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';




class Navbar extends React.Component {
	constructor (props) {
		super(props);
    this.search = this.search.bind(this);
	}
  search() {

    this.props.findMovies(this.refs.movies.value)
		if( this.props.location.pathname !=='/AllMovies' ){
			hashHistory.push('/AllMovies')
		}
  }
	render() {
		return (
			<div>
				<h2>Navbar</h2>
				<IndexLink to='/' activeClassName='active'><button type='submit'>Home</button></IndexLink>
				<Link to='/AllMovies' activeClassName='active'><button type='submit'>All Products</button></Link>
				<Link to='/MyAccount' activeClassName='active'><button type='submit'>My Account</button></Link>
				<Link to='/Login' activeClassName='active'><button type='submit'>Login</button></Link>
				<input ref='movies' placeholder='Search'></input>
				<button onClick={this.search} >Search!</button>

			</div>
		 );
	}
}

export default Navbar;
