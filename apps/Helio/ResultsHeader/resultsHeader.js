import React from 'react';

import Search from 'react-material-icons/icons/action/search';
import styles from './resultsHeader.scss';

class ResultsHeader extends React.Component {
	render(){
		return(
			<div className='resultsHeadArea'>
			    <div className='searchBox'>
				    <Search style={{'color': '#fff', 'display': 'inline-block', 'paddingRight': '10px', 'backgroundColor': 'rgba(255,255,255,.15)', 'height': '48px', 'float': 'left', 'width': '36px'}}/>
				    <input className='searchInput' value='FitFood' ></input>
				</div>
		  	</div>
		)
	}
}

export default ResultsHeader;
