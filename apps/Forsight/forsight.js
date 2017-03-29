import React from 'react';

import styles from './forsight.scss';

const forsightScreenShot = require('../../dist/img/forsight.png');

class Forsight extends React.Component {

	render(){
		return(
			<div className='forsightContainer'>
			    <img className='forsightImage' src={forsightScreenShot}></img>
		  	</div>
		)
	}
}

export default Forsight;
