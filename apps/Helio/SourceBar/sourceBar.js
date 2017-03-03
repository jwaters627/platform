import React from 'react';

import styles from './sourceBar.scss';
import Share from 'react-material-icons/icons/social/share';
import Download from 'react-material-icons/icons/file/file-download';
import Edit from 'react-material-icons/icons/editor/mode-edit';
import { Scroll, Link, scrollSpy } from 'react-scroll';
import { StickyContainer, Sticky } from 'react-sticky';
import Fab from '../FAB/fab';

class FilterBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           sections: [{text: 'WHERE',name: 'where', selected: true},{text: 'WHAT',name: 'what', selected: false},{text: 'HOW',name: 'how', selected: false},{text: 'WHO',name: 'who', selected: false}],
        }
    }

    renderSections = (item) => {
    	return (
    		<div className="sourceContainer">
				<Link className="sourceTitle" activeClass="selected" to={item.name} offset={-100} spy={true} smooth={false} duration={500} >{item.text}</Link>
			</div>
    	)
    }

	render(){
		return(
				<Sticky>
					<div className='sourceBar'>
						{this.state.sections.map(this.renderSections)}
				 	</div>
				 	<Fab />
			  	</Sticky>
		)
	}
}

export default FilterBar;
