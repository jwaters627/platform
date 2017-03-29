import React from 'react';
import classNames from 'classnames';
import styles from './teamSelect.scss';
import DownArrow from 'react-material-icons/icons/navigation/arrow-drop-down';

class TeamSelect extends React.Component{

  renderTeams( team ){
    if(team.selected == true){return}
      else{
    return(
        <h4 key={team.key} className="teamList" onClick={(event)=>this.props.teamClickUpdate(team.key)}>{team.name}</h4>
      )
    }
  }


  render(){

    let productClass = classNames(
            'product',
            {
                "helio": (this.props.product == 'HelioSight' && this.props.teamContainer !== 'teamSelectContainerOpen'),
                "forsight": (this.props.product == 'ForSight' && this.props.teamContainer !== 'teamSelectContainerOpen'),
            }
        );

    let arrowColor = '#000';
    if((this.props.product == 'HelioSight' || this.props.product == 'ForSight') && this.props.teamContainer !== 'teamSelectContainerOpen'){
      arrowColor='#fff';
    }    

    return(
      <div id={this.props.teamContainer} onClick={this.props.handleTeamClick}>
      	<DownArrow id="teamArrow" style={{color: arrowColor, 'width': '40px', 'height': '26px'}} />
      	<h4 className={productClass} >{this.props.team}</h4>
        <hr id={this.props.showTeams}/>
      	<div id={this.props.showTeams}>
           {this.props.teams.map(this.renderTeams, this)}
      	</div>
      </div>
  )
  }
}


export default TeamSelect;