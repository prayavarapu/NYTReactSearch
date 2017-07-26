

var axios = require("axios");
//NYT API
var nytAPI = "097be422255e45a18b6864a8176f4a6c";

var helpers = {

	runQuery: function(topic, startYear, endYear){

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

		return axios.get(queryURL)
			.then(function(response){
				var newResults = [];
				var fullResults = response.data.response.docs;
				var counter = 0;

				for(var i = 0; i <fullResults.length; i++){
					if (counter > 4){
						return newResults;
					}
				}
			})
	}
}