import React from 'react';

import Search from 'react-material-icons/icons/action/search';
import Ellipsis from 'react-material-icons/icons/navigation/more-vert';
import styles from './suggestedSearches.scss';

class suggestedSearches extends React.Component {
	render(){
		return(
			<div className='suggestedSearchesContainer'>
			   <div className='contentContainer'>
			   		<h3 style={{'marginBottom': '40px'}}>Suggested Searches</h3>
			   		<div className='suggestedSearch'>
			   			<p className='searchName'>Search Name</p>
			   			<p className='searchTitle'>Competitor</p>
			   			<Ellipsis style={{'display': 'inline-block', 'height': '16px', 'float': 'right', 'marginTop': '20px', 'marginRight': '20px'}}/>
			   		</div>
			   		<div className='suggestedSearch'>
			   			<p className='searchName'>Search Name</p>
			   			<p className='searchTitle'>Competitor</p>
			   			<Ellipsis style={{'display': 'inline-block', 'height': '16px', 'float': 'right', 'marginTop': '20px', 'marginRight': '20px'}}/>
			   		</div>
			   		<div className='suggestedSearch'>
			   			<p className='searchName'>Search Name</p>
			   			<p className='searchTitle'>Competitor</p>
			   			<Ellipsis style={{'display': 'inline-block', 'height': '16px', 'float': 'right', 'marginTop': '20px', 'marginRight': '20px'}}/>
			   		</div>
			   		<div className='suggestedSearch'>
			   			<p className='searchName'>Search Name</p>
			   			<p className='searchTitle'>Competitor</p>
			   			<Ellipsis style={{'display': 'inline-block', 'height': '16px', 'float': 'right', 'marginTop': '20px', 'marginRight': '20px'}}/>
			   		</div>
			   </div>
			   <div className='contentContainer'>
			   		<h3 style={{'marginBottom': '40px'}}>Saved Searches</h3>
			   		<img src='../../../common/img/savedSearchScreenShot.png'/>
			   </div>

		  	</div>
		)
	}
}

export default suggestedSearches;
