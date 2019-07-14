import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchfield: '',
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}));
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
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}

}

export default App;