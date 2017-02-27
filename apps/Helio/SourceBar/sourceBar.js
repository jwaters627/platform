import React from 'react';

import styles from './sourceBar.scss';
import classNames from 'classnames';
import Share from 'react-material-icons/icons/social/share';
import { Scroll, Link, scrollSpy } from 'react-scroll';
import { StickyContainer, Sticky } from 'react-sticky';

class FilterBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           sections: [{text: 'WHERE',name: 'where', selected: true},{text: 'WHAT',name: 'what', selected: false},{text: 'HOW',name: 'how', selected: false},{text: 'WHO',name: 'who', selected: false}, ]
        }
        this.handleSetActive = this.handleSetActive.bind(this);
        this.renderSections = this.renderSections.bind(this);
    }


    renderSections(item){
    	let myClass = classNames(
            'sourceTitle',
            {
                "selected": (item.selected),
            }
        );
    	return (
    		<div className="sourceContainer">
				<Link className="sourceTitle" activeClass="selected" to={item.name} isDynamic={true} offset={-50} spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive} onSetInactive={this.handleSetActive}>{item.text}</Link>
			</div>
    	)
    }

    handleSetActive(to){
    	console.log(to);
    }

    

	render(){
		
		return(
				<Sticky>
					<div className='sourceBar'>
						{this.state.sections.map(this.renderSections)}
					    <Share style={{'boxShadow': '0px 2px 8px rgba(30, 30, 30, 0.7)' ,'display': 'inline-block', 'float': 'right', 'borderRadius': '24px', 'padding': '10px', 'marginRight': '76px', 'marginTop': '34px', 'color': '#fff', 'backgroundColor': '#E06D20'}}/>
				  	</div>
			  	</Sticky>
		)
	}
}

export default FilterBar;
