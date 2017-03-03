import React from 'react';

import HelioLanding from './HelioLanding/helioLanding';
import Results from './Results/results';
import FilterBar from './FilterBar/filterBar';
import SuggestedSearches from './SuggestedSearches/suggestedSearches';


import getMuiTheme from 'material-ui/styles/getMuiTheme';


class HelioSight extends React.Component {
	static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme({
                palette:{
                   
                }
            })
        }
    } 
    constructor(props) {
        super(props);
        this.state = {
            rendering: '',
            filters: {
				date:[{id: 0,text: 'Jun 13 - Jun 27', selected: true},{id: 1, text: 'that', selected: false},{id: 2,text: 'other', selected: false}],
				language: [{id: 0,text: 'English', selected: true},{id: 1,text: 'asdfdsafdsafdas fgdhfnbvmnb asdasd', selected: false}, {id: 2,text: 'Spanish', selected: false},{id: 3,text: 'French', selected: false},{id: 4,text: 'Mandarin', selected: false},{id: 5,text: 'Italian', selected: false},{id: 6,text: 'Japanese', selected: false}],
				location: [{id: 0,text: 'New York, NY', selected: true},{id: 1,text: 'Argentina', selected: false},{id: 2,text: 'Alaska', selected: false},{id: 3,text: 'Britain (UK)', selected: false},{id: 4,text: 'Canada', selected: false},{id: 5,text: 'Denmark', selected: false},{id: 6,text: 'Florida', selected: false}],
				more:[{id: 0,text: 'More filters', selected: true},{id: 1,text: 'that', selected: false},{id: 2,text: 'other', selected: false}]
			}
        }
        this.searchEnter = this.searchEnter.bind(this);
    }

    searchEnter(e){
    	if(e.key == 'Enter'){
    		this.setState({rendering: 'results'})
		}
    }
	render(){
		let componentToRender = (<HelioLanding searchEnter={this.searchEnter} filters={this.state.filters}/>)
		if(this.state.rendering == 'results'){
			componentToRender = (<Results filters={this.state.filters}/>)
		}
		return(
			<div>
			   {componentToRender}
		    	
		  	</div>
		)
	}
}

export default HelioSight;
