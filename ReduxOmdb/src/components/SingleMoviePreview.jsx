import React from 'react';
import {Link, IndexLink} from 'react-router';
import Movie from './Movie.jsx'

class AllMovies extends React.Component {
	constructor (props) {
		super(props);
	}
  componentWillMount(){
    this.props.findMovie(this.props.params.movieId);
  }
	render() {
    if(!this.props.movie) return <p>Loading...</p>;
		return (
			<div>
			   <Movie movie={this.props.movie}/>
			</div>
		 );
	}
}

export default AllMovies;
