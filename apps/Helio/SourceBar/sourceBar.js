import React from 'react';

import styles from './sourceBar.scss';
import Share from 'react-material-icons/icons/social/share';
import { StickyContainer, Sticky } from 'react-sticky';

class FilterBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           
        }
    }


	render(){
		return(
				<Sticky>
					<div className='sourceBar'>
					    <div className="sourceContainer">
					    	<p style={{'borderBottom': '4px solid #E06D20'}} className="sourceTitle">ALL SOURCES</p>
					    </div>
					    <div className="sourceContainer">
					    	<p className="sourceTitle">TWITTER</p>
					    </div>
					    <div className="sourceContainer">
					    	<p className="sourceTitle">INSTAGRAM</p>
					    </div>
					    <div className="sourceContainer">
					    	<p className="sourceTitle">FACEBOOK</p>
					    </div>
					    <Share style={{'boxShadow': '0px 2px 8px rgba(30, 30, 30, 0.7)' ,'display': 'inline-block', 'float': 'right', 'borderRadius': '24px', 'padding': '10px', 'marginRight': '76px', 'marginTop': '34px', 'color': '#fff', 'backgroundColor': '#E06D20'}}/>
				  	</div>
			  	</Sticky>
		)
	}
}

export default FilterBar;
