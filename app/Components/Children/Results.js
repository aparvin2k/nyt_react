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
	componentWillReceiveProps(nextProps) {
			this.setState({articles: this.props.articles});
	
	}
	handleButtonClick() {
		console.log("click");
		console.log(this.event);
		
	}
	render() {
		return (
	      <div className="panel panel-default">
	        <div className="panel-heading">
	          <h3 className="panel-title text-center">Search History</h3>
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
			       			<p>{search.snippet}</p>
			       			<div id={i}>
										<button
											onClick={this.handleButtonClick}
											className="btn btn-success">
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
