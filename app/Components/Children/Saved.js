import React from 'react';
import Helpers from '../../utils/helpers';
import deletePanel from '../panels/deletePanel';

class Saved extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
		
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
		       <p>Sum moFuckin savory articles</p>
				    <div>
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
		  </div>
		)
	}
}

export default Saved;
