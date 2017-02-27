import React from 'react';

import HelioSearch from '../HelioSearch/helioSearch';
import FilterBar from '../FilterBar/filterBar';
import SuggestedSearches from '../SuggestedSearches/suggestedSearches';

import getMuiTheme from 'material-ui/styles/getMuiTheme';


class HelioLanding extends React.Component {
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
            
        }
       
    }
	render(){
		return(
			<div>
			    <HelioSearch 
			    	searchEnter={this.props.searchEnter}
		    	/>
		    	<FilterBar filters={this.props.filters}/>
		    	<SuggestedSearches />
		  	</div>
		)
	}
}

export default HelioLanding;
