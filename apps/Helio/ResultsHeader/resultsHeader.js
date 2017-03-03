import React from 'react';

import Search from 'react-material-icons/icons/action/search';
import styles from './resultsHeader.scss';
import StarOutline from 'react-material-icons/icons/toggle/star-border';
import Star from 'react-material-icons/icons/toggle/star';
import Checkbox from 'material-ui/Checkbox';

class ResultsHeader extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	full: false,
        	infoShow: 'none',
        	infoClosed: false
           }
    }

    handleEmptyStarClick = () => {
    	console.log(this.state.infoShow)
    	this.setState({full: true})
    	if(this.state.infoClosed){
    		this.setState({infoShow: 'none'})
    	}
    	else{this.setState({infoShow: 'inline-block'})}
    }

    handleStarClick = () => {
    	this.setState({full: false, infoShow: 'none'})
    }

    closeInfo = () => {
    	this.setState({infoClosed: !this.state.infoClosed})
    }

    handleSaveClick = () => {
    	this.setState({infoShow: 'none'})
    }

	render(){
		let star = (<StarOutline style={{'color': '#fff', 'backgroundColor': 'rgba(255,255,255,.15)', 'height': '48px', 'cursor': 'pointer', 'float': 'left', 'paddingRight': '10px'}} onClick={this.handleEmptyStarClick} />)
		if(this.state.full){
			star = (<Star style={{'color': '#E06D20', 'backgroundColor': 'rgba(255,255,255,.15)', 'height': '48px', 'cursor': 'pointer', 'float': 'left', 'paddingRight': '10px'}} onClick={this.handleStarClick} />)
		}
		return(
			<div className='resultsHeadArea'>
			    <div className='searchBox'>
				    <Search style={{'color': '#fff', 'display': 'inline-block', 'paddingRight': '10px', 'backgroundColor': 'rgba(255,255,255,.15)', 'height': '48px', 'float': 'left', 'width': '36px'}}/>
				    <input className='searchInput' value='FitFood' ></input>
				    {star}
				    <div className='savedSearchInfoBox' style={{'display': this.state.infoShow}}>
				    	<p className='saveSearchHeading' >Save this Search</p>
				    	<p className='searchNameLabel' >Name </p>
				    	<input className='savedSearchInput'></input>
				    	<p className='saveSearchInfoText'>The date range will update to display the Last 2 Weeks from whenever you next re-enter the search.</p>
				    	<p className='saveSearchInfoText'>All other filters will be maintained as they are now.</p>
				    	<Checkbox onClick={this.closeInfo} style={{'marginBottom': '30px'}} label="Don't show this message again" labelStyle={{'color': '#009494', 'fontFamily': 'CHOpenSans', 'fontSize': '14px', 'textDecoration': 'underline'}}/>
				    	<p onClick={this.handleSaveClick} className='saveButton'>SAVE</p>
				    	<p onClick={this.handleStarClick} className='cancelButton'>CANCEL</p>
				    </div>
				</div>
		  	</div>
		)
	}
}

export default ResultsHeader;
