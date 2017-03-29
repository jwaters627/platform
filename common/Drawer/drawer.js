import React from 'react';
import { Link, browserHistory } from 'react-router';

import styles from './drawer.scss';
import add from '../../dist/img/add.svg';
import home from '../../dist/img/home.svg';
import list from '../../dist/img/list.svg';
import recent from '../../dist/img/recent.svg';
import favorite from '../../dist/img/favorite.svg';
import help from '../../dist/img/help.svg';
import arrow from '../../dist/img/arrow_dropdown.svg'

class Drawer extends React.Component{
  render(){
    return(
      <div id="drawer" className={this.props.open}>
        <div className="productHeading" style={{'backgroundColor': '#3D5467'}}><h4 className="productText">{this.props.product}</h4></div>
    	  <div className="linkContainer" id="create"><img id="icons" src={add} /><h4 className="drawerLinks">Create</h4></div>
      	<div className="linkContainer"><img id="icons" src={home} /><h4 className="drawerLinks">Home</h4></div>
      	<div className="linkContainer"><img id="icons" src={list} /><h4 className="drawerLinks">All</h4><img id="downArrow" src={arrow} /></div>
      	<div className="linkContainer"><img id="icons" src={recent} /><h4 className="drawerLinks">Recent</h4><img id="downArrow" src={arrow} /></div>
      	<div className="linkContainer"><img id="icons" src={favorite} /><h4 className="drawerLinks">Favorites</h4><img id="downArrow" src={arrow} /></div>
      	<div className="linkContainer" id="help"><img id="icons" src={help} /><h4 className="drawerLinks">Help</h4></div>
      </div>
  )
  }
}


export default Drawer;