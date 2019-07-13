import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBar from './SearchBar';

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchfield: '',
			robots: robots
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		console.log(event)		
	}


	render() {

		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return(
			<div className="tc ma0">
				<SearchBar searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}

}

export default App;