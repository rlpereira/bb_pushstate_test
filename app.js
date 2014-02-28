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
		Backbone.history.start({ silent: true, pushState: true, root: '/bb_pushstate_test/' });
		this.populateDataUrlPosts();
	},

	populateDataUrlPosts: function () {
		var self = this,
			posts = this.findByClassName('post');
		
		_.each(posts, function(item) {
			var el = item,
				titleEl = self.findByClassName('post_title', el)[0],
				id = item['id'],
				url = item['data_url'];

				$('#' + id).attr('data-url', self.replaceSpaces(titleEl.innerHTML));

				$('#' + id).waypoint(function(direction) {
					var url = $(this).attr('data-url');
					Backbone.history.navigate(url, true);
				});
		})
	},

	replaceSpaces: function (str) {
		return str.split(' ').join('_');
	},

	findByClassName: function (className, element) {
		if(element) {
			return element.getElementsByClassName(className);
		}

		return document.getElementsByClassName(className);
	},

	findById: function (id, element) {
		if(element) {
			return elemente.getElementById(id);
		}

		return document.getElementById(id);
	}
}

window.onload = function () {
	var app = new App();
	app.initialize();
}