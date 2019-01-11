import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from "./Movie";


class App extends Component {

	state = {

	}

	componentWillMount() {
		console.log("component Will Mount");
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				movies: [
					{
						title: "살인의_추억",
						poster: "http://cdnweb01.wikitree.co.kr/webdata/editor/201309/06/img_20130906092652_b83d0989.jpg"
					},
					{
						title: "본_얼티메이텀",
						poster: "http://cdnweb01.wikitree.co.kr/webdata/editor/201309/06/img_20130906092536_e04a74b0.jpg"
					},
					{
						title: "사무라이_픽션",
						poster: "http://cdnweb01.wikitree.co.kr/webdata/editor/201309/06/img_20130906092600_f0094621.jpg"
					},
					{
						title: "칼",
						poster: "http://cdnweb01.wikitree.co.kr/webdata/editor/201309/06/img_20130906092837_59dd9cae.jpg"
					},
					{
						title: "셜록",
						poster: "http://image.auction.co.kr/itemimage/bf/17/85/bf1785425.jpg"
					}
				]
			})
		}, 5000)
	}

	_renderMovies = () => {
		const movies = this.state.movies.map((movie, index) => {
			return <Movie title={movie.title} poster={movie.poster} key={index} />
		})
		return movies
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
