import React from 'react';

import HeadContainer from '../HeadContainer/headContainer';
import Drawer from '../Drawer/drawer';
import { hashHistory } from 'react-router';

import dropup from '../img/arrow_dropup.svg';
import dropdown from '../img/arrow_dropdown.svg';

import products from '../../stores/products';
import teams from '../../stores/teams';

import fonts from '../fonts.scss';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {product: 'Forsight', listedProducts: products, team: 'Team A', listedTeams: teams, open: 'drawerClosed', productArrow: dropdown, teamArrow: dropdown, showProducts: 'otherProductsHide', showTeams: 'otherTeamsHide', showTeamsSettings: 'teamListInSettingsHide', productContainer: 'productSelectContainer', teamContainer: 'teamSelectContainer', showProfile: 'profileHidden' };
	this.handleBurgerClick = this.handleBurgerClick.bind(this);
  this.handleProductClick = this.handleProductClick.bind(this);
  this.handleTeamClick = this.handleTeamClick.bind(this);
  this.handleInitialsClick = this.handleInitialsClick.bind(this);
  this.closeAll = this.closeAll.bind(this);
  this.productClickUpdate = this.productClickUpdate.bind(this);
  this.teamClickUpdate = this.teamClickUpdate.bind(this);
  this.teamInSettingsClickUpdate = this.teamInSettingsClickUpdate.bind(this);
  this.handleTeamInSettingsClick = this.handleTeamInSettingsClick.bind(this);
  }

  handleBurgerClick(){
  	if(this.state.open === 'drawerClosed'){
  		this.setState({open: 'drawerOpen'})
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
      this.setState({teamContainer: 'teamSelectContainer'})
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({showProfile: 'profileHidden'})
      this.setState({showTeamsSettings: 'teamListInSettingsHide'})
  	}
  	else{this.setState({open: 'drawerClosed'})}
  }

  handleProductClick(){
    if(this.state.productArrow == dropdown){
      this.setState({productArrow: dropup})
      this.setState({showProducts: 'otherProducts'})
      this.setState({productContainer: 'productSelectContainerOpen'})
      this.setState({open: 'drawerClosed'})
      this.setState({teamContainer: 'teamSelectContainer'})
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({showProfile: 'profileHidden'})
      this.setState({showTeamsSettings: 'teamListInSettingsHide'})
    }
    else{
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
    }
  }

  productClickUpdate( item ){
    for(var i=0; i < this.state.listedProducts.length; i++){
      if(this.state.listedProducts[i].key == item){
        console.log(this.state.listedProducts[i])
        hashHistory.push('/'+this.state.listedProducts[i].name);
        this.state.listedProducts[i].selected = true
        this.setState({product: this.state.listedProducts[i].name})
      }
      else{this.state.listedProducts[i].selected = false}
    }
  }


  handleTeamClick(){
    if(this.state.teamArrow == dropdown){
      this.setState({teamArrow: dropup})
      this.setState({showTeams: 'otherTeams'})
      this.setState({teamContainer: 'teamSelectContainerOpen'})
      this.setState({open: 'drawerClosed'})
      this.setState({showProfile: 'profileHidden'})
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
    }
    else{
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({teamContainer: 'teamSelectContainer'})

    }
  }

  handleTeamInSettingsClick(){
    if(this.state.showTeamsSettings == 'teamListInSettingsHide'){
    this.setState({showTeamsSettings: 'teamListInSettings'})
    }
    else{this.setState({showTeamsSettings: 'teamListInSettingsHide'})}
  }

  teamClickUpdate( item ){
    for(var i=0; i < this.state.listedTeams.length; i++){
      if(this.state.listedTeams[i].key == item){
        this.state.listedTeams[i].selected = true
        this.setState({team: this.state.listedTeams[i].name})
      }
      else{this.state.listedTeams[i].selected = false}
    }
  }

    teamInSettingsClickUpdate( item ){
    for(var i=0; i < this.state.listedTeams.length; i++){
      if(this.state.listedTeams[i].key == item){
        this.state.listedTeams[i].selected = true
        this.setState({team: this.state.listedTeams[i].name})
      }
      else{this.state.listedTeams[i].selected = false}
    }
  }


  handleInitialsClick(){
    if(this.state.showProfile == 'profileHidden'){
      this.setState({showProfile: 'profile'})
      this.setState({teamArrow: dropdown})
      this.setState({showTeams: 'otherTeamsHide'})
      this.setState({teamContainer: 'teamSelectContainer'})
      this.setState({open: 'drawerClosed'})
      this.setState({productArrow: dropdown})
      this.setState({showProducts: 'otherProductsHide'})
      this.setState({productContainer: 'productSelectContainer'})
      this.setState({showTeamsSettings: 'teamListInSettingsHide'})

    }
    else{
      this.setState({showProfile: 'profileHidden'})
    }
  }

  closeAll(){
    this.setState({showProfile: 'profileHidden', showTeams: 'otherTeamsHide', showProducts: 'otherProductsHide', open: 'drawerClosed', teamArrow: dropdown, productArrow: dropdown, productContainer: 'productSelectContainer', teamContainer: 'teamSelectContainer'})
  }

	render() {
		return <div>
			<HeadContainer 
        product={this.state.product} 
        team={this.state.team} 
        handleBurgerClick={this.handleBurgerClick} 
        handleProductClick={this.handleProductClick} 
        productArrow={this.state.productArrow} 
        showProducts={this.state.showProducts}
        productContainer={this.state.productContainer}
        teamArrow={this.state.teamArrow}
        handleTeamClick={this.handleTeamClick}
        showTeams={this.state.showTeams}
        teamContainer={this.state.teamContainer}
        handleInitialsClick={this.handleInitialsClick}
        showProfile={this.state.showProfile}
        products={this.state.listedProducts}
        productClickUpdate={this.productClickUpdate}
        teams={this.state.listedTeams}
        teamClickUpdate={this.teamClickUpdate}
        teamInSettingsClickUpdate={this.teamClickUpdate}
        handleTeamInSettingsClick={this.handleTeamInSettingsClick}
        showTeamsSettings={this.state.showTeamsSettings}
      />
			<Drawer open={this.state.open}/>
		</div>	
	}
};

export default Main;