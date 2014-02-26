window.cl = function() {
	if(window.console) {
		for(var i in arguments) {
			console.log(arguments[i]);
		}
	}
}

var App = function() {}

App.prototype = {
	initialize: function() {
		cl('App initialized!');
		this.populateDataUrlPosts();
	},

	populateDataUrlPosts: function () {
		var self = this,
			posts = this.find('post');
		
		_.each(posts, function(item) {
			var el = item,
				titleEl = self.find('post_title', el)[0],
				title = self.replaceSpaces(titleEl.innerHTML),
				id = item['id'],
				url = item['data_url'];
		})
	},

	replaceSpaces: function (str) {
		return str.split(' ').join('_');
	},

	find: function (className, element) {
		if(element) {
			return element.getElementsByClassName(className);
		}

		return document.getElementsByClassName(className);
	}
}

window.onload = function () {
	var app = new App();
	app.initialize();
}