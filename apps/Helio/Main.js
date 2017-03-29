import React from 'react';

import HelioLanding from './HelioLanding/helioLanding';
import Results from './Results/results';
import FilterBar from './FilterBar/filterBar';
import Snackbar from 'material-ui/Snackbar';
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
    				date:[{id: 0,text: 'Jun 13 - Jun 27', selected: true},{id: 1, text: 'Last Week', selected: false},{id: 2,text: 'Last Month', selected: false}],
    				language: [{id: 0,text: 'English', selected: true},{id: 1,text: 'asdfdsafdsafdas fgdhfnbvmnb asdasd', selected: false}, {id: 2,text: 'Spanish', selected: false},{id: 3,text: 'French', selected: false},{id: 4,text: 'Mandarin', selected: false},{id: 5,text: 'Italian', selected: false},{id: 6,text: 'Japanese', selected: false}],
    				location: [{id: 0,text: 'New York, NY', selected: true},{id: 1,text: 'Argentina', selected: false},{id: 2,text: 'Alaska', selected: false},{id: 3,text: 'Britain (UK)', selected: false},{id: 4,text: 'Canada', selected: false},{id: 5,text: 'Denmark', selected: false},{id: 6,text: 'Florida', selected: false}, {id: 7, text: 'United States', selected: false}],
    				more:[{id: 0,text: 'More filters', selected: true},{id: 1,text: 'that', selected: false},{id: 2,text: 'other', selected: false}],
                    sources:[{id: 0,text: 'All Sources', selected: true},{id: 1,text: 'Twitter', selected: false},{id: 2,text: 'Instagram', selected: false}],
		        },
                snackBarShow: false,
                message: 'Preparing download...'
        }
    }

    searchEnter = (e) => {
    	if(e.key == 'Enter'){
    		this.setState({rendering: 'results'})
		}
    }

    handleShowSnackBar = () => {
        this.setState({
        snackBarShow: true,
        message: 'Preparing download...'
        });
    }

    handleRequestClose = () => {
        this.setState({
            snackBarShow: false,
        });
    }

    handleActionTap = () => {
        this.setState({
            message: 'Cancelling download...'
        });
    }
   

	render(){
		let componentToRender = (<HelioLanding searchEnter={this.searchEnter} filters={this.state.filters}/>)
		if(this.state.rendering == 'results'){
			componentToRender = (<Results filters={this.state.filters} handleShowSnackBar={this.handleShowSnackBar} />)
		}
		return(
			<div>
			   {componentToRender}
		    	<Snackbar
                    open={this.state.snackBarShow}
                    message={this.state.message}
                    action="X"
                    autoHideDuration={3000}
                    onActionTouchTap={this.handleActionTap}
                    onRequestClose={this.handleRequestClose}
                    style={{'left': '194px', 'bottom': '24px', 'backgroundColor': '#333333'}}
                    contentStyle={{'backgroundColor': '#333333'}}
                    bodyStyle={{'backgroundColor': '#333333'}}
                    className='snack'
                />
		  	</div>
		)
	}
}

export default HelioSight;
