import React from 'react';

import Search from 'react-material-icons/icons/action/search';
import styles from './helioSearch.scss';

class HelioSearch extends React.Component {
	render(){
		return(
			<div className='searchArea'>
			    <h1 className='insightsHeader'>Discover Insights</h1>
			    <div className='searchBox'>
				    <Search style={{'color': '#fff', 'display': 'inline-block', 'paddingRight': '10px', 'backgroundColor': 'rgba(255,255,255,.15)', 'height': '48px', 'float': 'left', 'width': '36px'}}/>
				    <input className='searchInput' placeholder='Search for a brand, hashtag, handle or topic' onKeyPress={this.props.searchEnter}></input>
				</div>
		  	</div>
		)
	}
}

export default HelioSearch;
