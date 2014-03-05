window.cl = function() {
	if(window.console) {
		for(var i in arguments) {
			console.log(arguments[i]);
		}
	}
}

var App = function() {}

App.prototype = {
	/**
	**	init method, just start the Backbone history with the pushState turned ON.
	**	also passing the default path to change the url.
	**
	*/
	initialize: function() {
		Backbone.history.start({ silent: true, pushState: true, root: '/bb_pushstate_test/' });		
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
				self.bindPoints(id);
		})
	},

	bindPoints: function (pointId) {
		var pointId = '#' + pointId;

		$(pointId).waypoint(function(direction) {
			var url = $(this).attr('data-url');
			Backbone.history.navigate(url, true);
		});
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
	app.populateDataUrlPosts();
}