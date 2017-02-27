'use strict';

import React from 'react';

import styles from './headContainer.scss';
import burger from '../img/Menu.svg';
import logo from '../img/crimson_logo.png';
import ProductSelect from '../ProductSelect/productSelect.js';
import TeamSelect from '../TeamSelect/teamSelect.js';
import InitialIcon from '../InitialIcon/initialIcon.js';
import classNames from 'classnames';
import Burger from 'react-material-icons/icons/navigation/menu';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

class HeadContainer extends React.Component{

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
  render(){
    console.log(this.props.product == 'HelioSight')
    let productClass = classNames(
            'headContainer',
            {
                "helio": (this.props.product == 'HelioSight'),
            }
        );

    let burgerColor = '#000';
    if(this.props.product == 'HelioSight'){
      burgerColor='#fff';
    }    

                
          
    return(
      <div className={productClass}>
        <Burger onClick={this.props.handleBurgerClick} style={{color: burgerColor}} className='burger'/>
        <ProductSelect 
          product={this.props.product} 
          handleProductClick={this.props.handleProductClick} 
          productArrow={this.props.productArrow}
          showProducts={this.props.showProducts}
          productContainer={this.props.productContainer}
          productClickUpdate={this.props.productClickUpdate}
          products={this.props.products}
        />
        <InitialIcon 
          product={this.props.product} 
          handleInitialsClick={this.props.handleInitialsClick} 
          showProfile={this.props.showProfile}
          team={this.props.team}
          teamArrow={this.props.teamArrow}
          handleTeamClick={this.props.handleTeamClick}
          teamContainer={this.props.teamContainer}
          teams={this.props.teams}
          showTeamsSettings={this.props.showTeamsSettings}
          teamInSettingsClickUpdate={this.props.teamClickUpdate}
          handleTeamInSettingsClick={this.props.handleTeamInSettingsClick}
        />
        <TeamSelect 
          product={this.props.product} 
          team={this.props.team} 
          teamArrow={this.props.teamArrow}
          handleTeamClick={this.props.handleTeamClick}
          teamContainer={this.props.teamContainer}
          showTeams={this.props.showTeams}
          teamClickUpdate={this.props.teamClickUpdate}
          teams={this.props.teams}
        />
       
      </div>
  )
  }
}


export default HeadContainer;