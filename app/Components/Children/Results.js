import React from 'react';
import Helpers from '../../utils/helpers';
import resultPanel from '../panels/resultPanel';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
		this.renderArticles = this.renderArticles.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		console.log("getting articles");
		Helpers.getArticles(nextProps.topic, nextProps.startYear, nextProps.endYear).then((res) => {
			this.setState({articles: res.data.response.docs});
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Results</h3>
				  	</div>
				  	<div className="panel-body">
						<div key={i}>
						    {this.state.articles.map((article, i) => (
						    	<div className="panel panel-default">
						  			<div className="panel-heading">
						    			<h3 className="panel-title">{article.title}</h3>
						  			</div>
						  			<div className="panel-body">
						        		<p>{article.body}</p>
						        		<h4 id="resultListing">
						    				<a href={article.web_url} target="_blank">{article.headline.main}</a>
												<br />
												<button
							    				id="saveButton"
							    				className="btn btn-primary"
							    				onClick={this.saveArticle}
							    			>
							    				Save
							    			</button>
	    								</h4>
						        	</div>
						      </div>
						    ))}
				    	</div>
				  	</div>
				</div>
			</div>
		);
	}
}

export default Results;
