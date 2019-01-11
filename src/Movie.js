import React, { Component } from 'react';
import PropTypes from "prop-types";

function Movie({ title, poster }) {
	return (
		<div>
			<MoviePoster poster={poster} />
			<h2> {title} </h2>
		</div>
	)
}


function MoviePoster({ poster }) {
	return (
		<img src={poster} alt="이미지가 없음" />
	)
}

Movie.PropTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
}
MoviePoster.PropTypes = {
	poster: PropTypes.string.isRequired,
}


export default Movie
