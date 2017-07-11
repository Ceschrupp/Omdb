import React from 'react';
import {Link, IndexLink} from 'react-router';

class SingleMovie extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		const{Title, Year, Genre, Director, Actors, Plot, Poster  } = this.props.movie;
		return (
			<div>

			<h1>{this.props.movie.Title}</h1>
			<Link to={`/movies/${this.props.movie.imdbID}`}><img src={this.props.movie.Poster} /></Link>
			<h4>Year: {this.props.movie.Year}</h4>



			</div>
		 );
	}
}

export default SingleMovie;
