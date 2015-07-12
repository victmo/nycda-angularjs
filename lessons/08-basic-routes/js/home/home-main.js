(function (app){

	app.controller('HomeMainCtrl', function(){
		var self = this;
		self.text = "Welcome! You are home!";
	});

})(angular.module('HomeModule', []));