import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from "./Movie";


class App extends Component {

	state = {

	}

	_callApi = () => {
		return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
			.then(potato => potato.json())
			.then(json => json.data.movies)
			.catch(err => console.log(err))
	}

	_getMovies = async () => {
		const movies = await this._callApi()
		this.setState({
			movies
		})
	}

	_renderMovies = () => {
		const movies = this.state.movies.map((movie, index) => {
			console.log(movie)			
			return <Movie title={movie.title} poster={movie.medium_cover_image} key={index} />
		})
		return movies
	}

	componentDidMount() {
		console.log("영화 데이터 요청 하기");		
		this._getMovies();
	}

	render() {
		console.log("component rendering is completed")
		return (
			<div className="App">
				{this.state.movies ? this._renderMovies() : 'Loading'}
			</div>
		);
	}
}

export default App;
