import React from 'react';
import Helpers from '../../utils/helpers';
import resultPanel from '../panels/resultPanel';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
		this.getSaved = this.getSaved.bind(this);
		this.renderArticles = this.renderArticles.bind(this);
	}
	componentWillReceiveProps(nextProps) {
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
