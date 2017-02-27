import React from 'react';
import DownArrow from 'react-material-icons/icons/navigation/arrow-drop-down';
import UpArrow from 'react-material-icons/icons/navigation/arrow-drop-up';
import TextField from 'material-ui/TextField';
import styles from './dropDown.scss';
import classNames from 'classnames';

class DropDown extends React.Component {
	 constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: this.props.items[0].text,
            value: ''
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.setList = this.setList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleOpen(){
    	this.setState({open: !this.state.open})
    	
    	
    }

    setList(item){
    	
        if(item.selected || item.text.toLowerCase().includes(this.state.value.toLowerCase()) == false){return}
       	else{
	    	return(
	    		<p className='dropDownItemsText' onClick={ ( e ) => {this.handleSelect(item)}}>{item.text}</p>
			)
    	}
    }

    handleChange(event){
    	this.setState({value: event.target.value})
    }

    handleSelect(item){
    	for(let i = 0; i < this.props.items.length; i++){
			if(this.props.items[i] == item){this.setState({text: item.text}); item.selected = true}
			else{this.props.items[i].selected = false}
		}
	this.handleOpen()
	this.setState({value: ''})
    }
	
	render(){
		let shown = 'none';
		if(this.state.open){shown = 'inline-block'}
		let displayed = (
			<div className='dropDownContainer' style={{'backgroundColor': this.props.containerColor, 'margin': this.props.margin}} >
			    <p className='dropDownText' onClick={this.handleOpen} style={{'color': this.props.textColor}}>{this.state.text}</p>
			    <DownArrow style={{'display': 'inline-block', 'color': this.props.arrowColor, 'marginLeft': '14px'}} onClick={this.handleOpen}/>
			    <div style={{'display': shown}}className='dropDownListContainer'>
				    <div style={{'borderBottom': '2px solid #E06D20', 'paddingBottom': '8px', 'paddingTop': '18px'}}>
			    		<TextField hintText="Search Locations..." underlineShow={false} style={{'float': 'left', 'display': 'inline-block', 'height': '24px', 'width': '156px', 'marginLeft': '18px'}} hintStyle={{'color': '#bbbbbb', 'bottom': '0'}} inputStyle={{'color': '#000', 'fontSize': '16px'}} value={this.state.value} onChange={this.handleChange} />
			    		<UpArrow onClick={this.handleOpen} style={{'display': 'inline-block', 'color': '#333'}}/>
		        	</div>
			    	{this.props.items.map(this.setList)}
			    </div>
		  	</div>
	  	)
	  	
	  	
		return(
			displayed
		)
	}
}

export default DropDown;
