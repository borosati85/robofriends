import React from 'react';
import './SearchBar.css';
import 'tachyons';

const SearchBar = ({searchChange}) => {
	return(
		<div className='pa2'>
			<h1 className='f1'>Robot Friends</h1>
			<input 	type='search' 
					placeholder='find robots' 
					className='pa3 ba b--green bg-lightest-blue'
					onChange={searchChange}/>
		</div>
	);
}

export default SearchBar;