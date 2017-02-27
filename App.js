import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import GlobalNav from './common/GlobalNav/globalNav';
import HelioSight from './apps/Helio/Main';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends React.Component {
	render(){
		return(
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/HelioSight' component={HelioSight} />
					<Route path='/ForSight' component ={ForSight} />
					<Route path='/Reporting' component ={Reporting} />
					<Route path='/Dashboards' component ={Dashboards} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

const Container = (props) => <StickyContainer><div>
  		<GlobalNav />
  	{props.children}
	</div>
	</StickyContainer>
const Home =() => <h1>This is Home</h1>
const ForSight = () => <h1>This is ForSight</h1>
const Dashboards = () => <h1>This is Dashboards</h1>
const Reporting = () => <h1>This is Reporting</h1>
const NotFound = () => <h1>404... This page is not found!</h1>
export default App
