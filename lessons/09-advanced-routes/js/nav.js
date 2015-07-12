(function(app){

	app.controller('NavigationCtrl', function(RouteStates){
		var self = this;
		self.routes = angular.copy(RouteStates);
	});


})(angular.module('NavigationModule', []));
