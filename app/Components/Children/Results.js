import React from 'react';
import Helpers from '../../utils/helpers';
import resultPanel from '../panels/resultPanel';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	componentWillReceiveProps() {
		this.setState({articles: this.props.articles});
	
	}
	handleButtonClick(event) {
		console.log("click save");
		console.log(event);
		var g = event.target.id;
		console.log("var g: " + g);
		Helpers.saveArticle(this.props.articles[g].headline.main, this.props.articles[g].web_url, this.props.articles[g].snippet);
		
	}
	render() {
		return (
	      <div className="panel panel-default">
	        <div className="panel-heading">
	          <h3 className="panel-title text-center">Search Results</h3>
	        </div>
	        <div className="panel-body text-center">

	          {/* Here we use a map function to loop through an array in JSX */}

			{this.props.articles.map((search, i) => {
			      return (
			      	<div className="panel panel-default" key={i}>
			    			<div className="panel-heading">
			     				<h3 className="panel-title text-center">{search.headline.main}</h3>
			    			</div>
			    			<div className="panel-body text-center">
			​
			       			{search.snippet}
			       			<div id={i}>
										<button id={i}
											onClick={this.handleButtonClick}
											className="btn btn-success" value={i}>
											Save
										</button>
									</div>
			​
			        	</div>
			   			</div>
			      );
			     })}
	        </div>
	      </div>
	    );
	}
}

export default Results;
