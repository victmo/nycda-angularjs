(function (app){

	app.controller('ContactUsMainCtrl', function(RouteStates){
		var self = this;
		self.text = "Make contact with us here!";
		self.routes = angular.copy(RouteStates);
	});

})(angular.module('ContactUsModule', []));