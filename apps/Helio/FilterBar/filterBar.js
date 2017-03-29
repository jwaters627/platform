import React from 'react';

import DropDown from '../../../common/DropDown/dropDown';

import styles from './filterBar.scss';


class FilterBar extends React.Component {
	
	render(){
		return(
			<div className='filterBar'>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 70px' textColor='#fff' items={this.props.filters.date}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.language}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.location}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.more}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.sources}/>
		  	</div>
		)
	}
}

export default FilterBar;
