import React from 'react';
import Card from './Card';

const CardList = ({ robots })=>{
	return (		
		<div>
			{robots.map(
				currentRobot => 
				<Card 
				key={currentRobot.id}
				id={currentRobot.id}
				name={currentRobot.name}
				user={currentRobot.username}
				email={currentRobot.email}/>)
			}
		</div>
	);
};

export default CardList;