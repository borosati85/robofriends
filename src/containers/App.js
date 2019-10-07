import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchfield: state.searchfield
	}	
}

const mapDistpatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}	
}

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}));
	}


	render() {
		const { robots } = this.state;
		const { searchfield, onSearchChange } = this.props;
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return(
			<div className="tc ma0">
				<SearchBar searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDistpatchToProps)(App);