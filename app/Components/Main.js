import React from 'react';
import Search from './Children/Search';
import Results from './Children/Results';
import Saved from './Children/Saved';

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
						<a href="/"><button className="btn btn-default">Search</button></a>
						<a href="/saved"><button className="btn btn-default">Saved Articles</button></a>
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