import React from 'react';

import styles from './fab.scss';
import Share from 'react-material-icons/icons/social/share';
import Download from 'react-material-icons/icons/file/file-download';
import Edit from 'react-material-icons/icons/editor/mode-edit';

class Fab extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           hovering: false,
           flip: 'above',
        }
    }


    componentDidMount(){
    	this.handleScroll();
    	window.addEventListener('scroll', this.handleScroll);
    }


    handleHover = () => {
    	this.setState({hovering: !this.state.hovering})
    }

    handleScroll = () => {
    	let divTop = document.getElementsByClassName('downloadButton')[0].getClientRects()[0].top - 180
    	if(divTop < 0){
    		this.setState({flip: 'below'})
    	}
    	else{this.setState({flip: 'above'})}
    }    

	render(){	
		let fabIcon = (
					<Share className='downloadButton' style={{'width': '58px', 'height': '58px','cursor': 'pointer', 'boxShadow': '0px 2px 8px rgba(30, 30, 30, 0.7)' , 'borderRadius': '36px', 'padding': '10px', 'color': '#fff', 'backgroundColor': '#E06D20'}}/>
					)
		if(this.state.hovering){
			fabIcon = (<Download onClick={this.props.handleShowSnackBar} className='downloadButton' style={{'width': '58px', 'height': '58px','cursor': 'pointer', 'boxShadow': '0px 2px 8px rgba(30, 30, 30, 0.7)', 'borderRadius': '36px', 'padding': '10px', 'color': '#fff', 'backgroundColor': '#E06D20'}}/>)
		}
		return(
			<div>		
				<div className='shareContainer' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
			 		<div className={this.state.flip}>
						<img src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/73905_542755331955_5392688_n.jpg?oh=2c312e5c6d4e98b66ec8368d47744136&oe=593B09B5' style={{'width': '60px', 'height': '60px','marginTop': '22px','cursor': 'pointer', 'borderRadius': '36px', 'padding': '10px'}}/>
						<img src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1456668_695204722155_75929644_n.jpg?oh=69930be38fd9ee4b456f557a50b99880&oe=5928F6C7' style={{'width': '60px', 'marginTop':'-12px',  'height': '60px','cursor': 'pointer', 'borderRadius': '36px', 'padding': '10px'}}/>
						<Edit style={{'marginLeft' : '8px','width': '40px', 'transition':'none','height': '40px','cursor': 'pointer', 'borderRadius': '24px', 'padding': '10px', 'color': '#fff', 'backgroundColor': '#2FB2AB'}}/>
					</div>
					{fabIcon}
				</div>
			</div>
		)
	}
}

export default Fab;
