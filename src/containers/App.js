import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}	

}

const mapDistpatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: ()=> dispatch(requestRobots())
	}	
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}


	render() {
		const { searchfield, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return(
			isPending ? 
			<h1>Loading</h1> :
			(
				<div className="tc ma0">
					<SearchBar searchChange={onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			)
		);
	}

}

export default connect(mapStateToProps, mapDistpatchToProps)(App);