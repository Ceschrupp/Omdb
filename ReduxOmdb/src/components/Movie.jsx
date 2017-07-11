import React from 'react';
import {Link, IndexLink} from 'react-router';

class Movie extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		const{Title, Year, Genre, Director, Actors, Plot, Poster  } = this.props.movie;
		return (
			<div>

			<h1>{this.props.movie.Title}</h1>
			<img src={this.props.movie.Poster} />
			<h3>Director: {this.props.movie.Director}</h3>
			<h4>Year: {this.props.movie.Year}</h4>
			<h4>Genre: {this.props.movie.Genre}</h4>
			<h4>Plot: {this.props.movie.Plot}</h4>
			<h4>Actors: {this.props.movie.Actors}</h4>

			</div>
		 );
	}
}

export default Movie;
