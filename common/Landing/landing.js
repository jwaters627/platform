import React from 'react';

import TextField from 'material-ui/TextField';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
class Landing extends React.Component {
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
		      <h1>Welcome to Crimson Hexagon</h1>
                <TextField 
                    hintText="Username"
                    onChange={this.props.usernameCheck}
                />
                 <TextField 
                    hintText="Password"
                    type='password'
                    onChange={this.props.passwordCheck}
                />
                <button type="button" onClick={this.props.submitEntry}>Submit</button>
		  	</div>
		)
	}
}

export default Landing;
