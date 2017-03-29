import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import GlobalNav from './common/GlobalNav/globalNav';
import Landing from './common/Landing/landing';
import HelioSight from './apps/Helio/Main';
import ForSight from './apps/forsight/forsight';

import { StickyContainer, Sticky } from 'react-sticky';
import Reporting from './apps/Reporting/components/Report/Report';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



class App extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            users: [{
            	name: "Jamie Waters",
            	initials: "JW",
            	teams: ["Team A", "Team B", "Team C", "Team D"],
            	permissions: {
            		systemAdmin: true,
            		teamAdmin: true
            	},
            	monitors: false,
            	reports: false,
            	dashoboards: false,
            	helioSearches: false,
            	savedVisualizations: false
            }],
            products: {
            	helio: {
            		name: "HelioSight",
            		color: "#000000",
            		leftDrawerList: ""
            	},
            	forsight: {
            		name: "ForSight",
            		color: "#3D5467",
            		leftDrawerList: ""
            	},
            	reports: {
            		name: "Reporting",
            		color: "#EEEEEE",
            		leftDrawerList: ""
            	},
            	Dashboards: {
            		name: "Dashboards",
            		color: "#EEEEEE",
            		leftDrawerList: ""
            	},
            	Audience: {
            		name: "Audience",
            		color: "#EEEEEE",
            		leftDrawerList: ""
            	},
            },
            selectedProduct: 'forsight',
        }
       
    }

	render(){
		let product = <ForSight />;
		if(this.state.selectedProduct == "helio"){product=<HelioSight />}

		return(
			<StickyContainer>
				<div>
			  		<GlobalNav/>
			  		{product}
				</div>
			</StickyContainer>
		)
	}
}

const Container = (props) =>(
	<StickyContainer>
		<div>
	  		<GlobalNav/>
	  		{props.children}
		</div>
	</StickyContainer>
	)
const Home =() => <h1>This is Home</h1>
const Dashboards = () => <h1>This is Dashboards</h1>

const NotFound = () => <h1>404... This page is not found!</h1>
export default App
