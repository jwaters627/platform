import React from 'react';

import DropDown from '../../../common/DropDown/dropDown';
import CHSelect from '../../../common/CHSelect/chSelect';

import Search from 'react-material-icons/icons/action/search';
import styles from './filterBar.scss';
import DownArrow from 'react-material-icons/icons/navigation/arrow-drop-down';


class FilterBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {     
        }   
    }
    
	render(){
		console.log(this.props.testing)
		return(
			<div className='filterBar'>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 70px' textColor='#fff' items={this.props.filters.date}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.language}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.location}/>
			    <DropDown arrowColor='#fff' margin='8px 0px 0px 32px' textColor='#fff' items={this.props.filters.more}/>
		  	</div>
		)
	}
}

export default FilterBar;
