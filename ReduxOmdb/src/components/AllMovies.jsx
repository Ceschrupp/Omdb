import React from 'react';
import {Link, IndexLink} from 'react-router';
import SingleMovie from './SingleMovie.jsx'

class AllMovies extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.movies.map((movie, i) => <SingleMovie {...
					this.props.movie} key={i} i={i} movie={movie} />)}
				</div>
		 );
	}
}

export default AllMovies;
