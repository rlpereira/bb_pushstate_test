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
	}
}

window.onload = function () {
	var app = new App();
	app.initialize();
}