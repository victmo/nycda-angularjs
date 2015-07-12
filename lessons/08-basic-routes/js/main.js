(function(app){

	app.constant('RouteStates', {
		homeState: {
			name: 'home'
		},
		aboutUsState: {
			name: 'aboutUs'
		},
		contactUsState: {
			name: 'contactUs'
		}
	});

	app.config(function($stateProvider, $urlRouterProvider, RouteStates){
		$stateProvider
			.state(RouteStates.homeState.name, {
				url: '/',
				templateUrl: 'partials/home/home-main.html',
				controller: 'HomeMainCtrl as c'
			})

			.state(RouteStates.aboutUsState.name, {
				url: '/about-us',
				templateUrl: 'partials/about-us/about-us-main.html',
				controller: 'AboutUsMainCtrl as c'
			})

			.state(RouteStates.contactUsState.name, {
				url: '/contact-us',
				templateUrl: 'partials/contact-us/contact-us-main.html',
				controller: 'ContactUsMainCtrl as c'
			})
		;
		$urlRouterProvider.otherwise('/');
	});


})(angular.module('Exercise08', ['HomeModule', 'AboutUsModule', 'ContactUsModule', 'ui.router']));
