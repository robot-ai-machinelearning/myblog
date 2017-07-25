import {Router, Route, IndexRoute} from 'react-router'
import React from 'react'
import Common from '../../components/Common'
import Home from '../../components/Home'
import Explore from '../../components/Explore'
import About from '../../components/About'

// export default class RouterMap extends React.Component {
// 	render(){
// 		return (
// 			<Router history={this.props.history}>
// 				<Route path='/' component={Home} />
// 				<Route path='/common' component={Common} />
// 				<Route path='/explore' component={Explore} />
//                 <Route path='/about' component={About}/>
// 			</Router>
// 		)
// 	}
// }

const routes = [
	{
		path: '/',
		component: Home
	},{
		path: '/common',
		component: Common
	},{
		path: '/explore',
		component: Explore
	},{
		path: '/about',
		component: About
	}
]

export default routes 