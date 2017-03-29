'use strict';

import React from 'react';

import styles from './headContainer.scss';
import burger from '../../dist/img/Menu.svg';
import ProductSelect from '../ProductSelect/productSelect.js';
import TeamSelect from '../TeamSelect/teamSelect.js';
import InitialIcon from '../InitialIcon/initialIcon.js';
import classNames from 'classnames';
import Burger from 'react-material-icons/icons/navigation/menu';
import logo from '../../dist/img/crimson_logo.png';
import whiteLogo from '../../dist/img/crimson_logo_white.svg';

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
    
    let productClass = classNames(
            'headContainer',
            {
                "helio": (this.props.product == 'HelioSight'),
                "forsight": (this.props.product == 'ForSight')
            }
        );

    let burgerColor = '#000';
    if(this.props.product.toLowerCase() == 'heliosight' || this.props.product.toLowerCase() == 'forsight'){
      burgerColor='#fff';
    }    

    let renderLogo = logo;
    if(this.props.product.toLowerCase() == 'heliosight' || this.props.product.toLowerCase() == 'forsight'){
      renderLogo = whiteLogo;
  }

                
          
    return(
      <div className={productClass}>
        <Burger onClick={this.props.handleBurgerClick} style={{color: burgerColor, 'cursor': 'pointer'}} className='burger'/>
        <img id="logo" src={renderLogo} />
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