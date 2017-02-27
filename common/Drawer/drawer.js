import React from 'react';
import { Link, browserHistory } from 'react-router';

import styles from './drawer.scss';
import add from '../img/add.svg';
import home from '../img/home.svg';
import list from '../img/list.svg';
import recent from '../img/recent.svg';
import favorite from '../img/favorite.svg';
import help from '../img/help.svg';
import arrow from '../img/arrow_dropdown.svg'

class Drawer extends React.Component{
  render(){
    return(
      <div id="drawer" className={this.props.open}>
    	<Link to={''}><div className="linkContainer" id="create"><img id="icons" src={add} /><h4 className="drawerLinks">Create</h4></div></Link>
      	<Link to={'palette'}><div className="linkContainer"><img id="icons" src={home} /><h4 className="drawerLinks">Home</h4></div></Link>
      	<Link to={'typography'}><div className="linkContainer"><img id="icons" src={list} /><h4 className="drawerLinks">All</h4><img id="downArrow" src={arrow} /></div></Link>
      	<Link to={'icons'}><div className="linkContainer"><img id="icons" src={recent} /><h4 className="drawerLinks">Recent</h4><img id="downArrow" src={arrow} /></div></Link>
      	<Link to={'navigation'}><div className="linkContainer"><img id="icons" src={favorite} /><h4 className="drawerLinks">Favorites</h4><img id="downArrow" src={arrow} /></div></Link>
      	<Link to={'navigation'}><div className="linkContainer" id="help"><img id="icons" src={help} /><h4 className="drawerLinks">Help</h4></div></Link>
      </div>
  )
  }
}


export default Drawer;