import React from 'react';
import Search from './Children/Search';
import Results from './Children/Results';
import Saved from './Children/Saved';
var Link = require("react-router").Link;

class Main extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			topic: '',
			startYear: '',
			endYear: ''
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Scrub the New York Times!</h1>
						<p><em>Search for articles and annotate articles of interest!</em></p>
						<Link to="/search"><button className="btn btn-default">Search</button></Link>
						<Link to="/saved"><button className="btn btn-default">Saved Articles</button></Link>
					</div>
			<div className="container-fluid">
				{this.props.children}
			</div>
		</div>
	</div>
		);
	}

}

export default Main;