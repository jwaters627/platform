import React from 'react';

import styles from './initialIcon.scss';


class InitialIcon extends React.Component{


  renderTeams( team ){
    if(team.selected == true){return}
      else{
    return(
        <h4 className="teamListSettings" onClick={(event)=>this.props.teamInSettingsClickUpdate(team.key)}>{team.name}</h4>
      )
    }
  }
  render(){
    return(
      <div>
      	<h4 id="initials" onClick={this.props.handleInitialsClick}>JW</h4>
      	<div id={this.props.showProfile}>
      		<div id='userInfo'>
      			<h4 id="initialsProfile">JW</h4>
      			<div id="nameAndEmail">
	      			<p id="name">Jamie Waters</p>
	      			<p id='email'>jwaters@crimsonhexagon.com</p>
      			</div>
      		</div>
      		<div id="teamInSettings" onClick={this.props.handleTeamInSettingsClick}>
	      		<img id="teamArrowSettings" src={this.props.teamArrow} />
	      		<h4 id="teamSettings">{this.props.team}</h4>
      			<div id={this.props.showTeamsSettings}>
       				{this.props.teams.map(this.renderTeams, this)}
  				</div>
      		</div>
      		<h4 id="settings">System Admin</h4>
      		<h4 id="settings">Team Admin</h4>
      		<h4 id="settings">Feedback</h4>
      		<h4 id="settings">Help Center</h4>
      		<h4 id="settings">Settings</h4>
      		<hr style={{color: '#aaaaaa'}} />
      		<h4 id="settings" style={{marginBottom: '12px', marginTop: '0px'}}>Logout</h4>
      	</div>
      </div>
  )
  }
}


export default InitialIcon;