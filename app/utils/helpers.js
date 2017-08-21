import axios from 'axios';

const Helpers = {
	getArticles: (topic, startYear, endYear) => {
		var authKey = "af8945d62d704ab4bf6d271be6ccfa91";
		var queryURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=`;
		var queryURL = queryURLBase + topic;
		if (parseInt(startYear)) {
			queryURL = `${queryURL}&begin_date=${startYear}0101`;
		}
		if (parseInt(endYear)) {
			queryURL = `${queryURL}&end_date=${endYear}0101&page=0`;
		}
		return axios.get(queryURL);
	},
	saveArticle: (title, url, body) => {
		return axios.post('/saved', {title: title, url: url, body:body});
	},
	getSaved: () => {
	return axios.get('/saved');
	},
	deleteArticle: (id) => {
		console.log(id);
		return axios.delete('/saved', { _id: id});
	},
};

export default Helpers;