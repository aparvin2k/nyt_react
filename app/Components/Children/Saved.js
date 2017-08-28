import React from 'react';
import Helpers from '../../utils/helpers';


class Saved extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
		
	}
	componentDidMount() {
		Helpers.getSaved().then((res) => {
			console.log(res.data);
			this.setState({articles: res.data});
		})
	}
	handleButtonClick(event) {
		console.log("click delete");
		console.log(event);
		var g = event.target.id;
		console.log("var g: " + g);
		Helpers.deleteArticle(g);
		
	}
	render() {
		return (
			<div className="container">
		    <div className="col-lg-12">
		     <div className="panel panel-primary">
		      <div className="panel-heading">
		       <h3 className="panel-title">Saved Articles</h3>
		      </div>
		      <div className="panel-body">
		       Saved Articles
				    <div>
					    {this.state.articles.map((article, i) => (
					    	<div className="panel panel-default">
					  			<div className="panel-heading">
					    			<h3 className="panel-title">{article.title}</h3>
					  			</div>
					  			<div className="panel-body">
					        	{article.body}
					        		<div id={i}>
										<button id={article._id}
											onClick={this.handleButtonClick}
											className="btn btn-danger" value={article._id}>
											Delete
										</button>
									</div>
					        </div>
					      </div>
					    ))}
				    </div>
		      </div>
		     </div>
		    </div>
		  </div>
		)
	}
}

export default Saved;
