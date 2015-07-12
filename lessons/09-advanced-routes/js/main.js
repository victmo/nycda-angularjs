(function(app){

	app.constant('RouteStates', {
		homeState: {
			name: 'home'
		},
		

		aboutUsState: {
			name: 'aboutUs'
		},
		aboutUsContentState: {
			name: 'aboutUs.content'
		},
		

		contactUsState: {
			name: 'contactUs'
		},
		contactUsCeoState: {
			name: 'contactUs.ceo'
		},
		contactUsPresidentState: {
			name: 'contactUs.president'
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
			.state(RouteStates.aboutUsContentState.name, {
				views: {
					sidebar: {
						templateUrl: 'partials/about-us/about-us-sidebar.html'
					},
					content: {
						templateUrl: 'partials/about-us/about-us-content.html'
					}
				}
			})



			.state(RouteStates.contactUsState.name, {
				url: '/contact-us',
				templateUrl: 'partials/contact-us/contact-us-main.html',
				controller: 'ContactUsMainCtrl as c'
			})
			.state(RouteStates.contactUsCeoState.name, {
				url: '/contact-us/ceo',
				templateUrl: 'partials/contact-us/contact-us-ceo.html'
			})
			.state(RouteStates.contactUsPresidentState.name, {
				url: '/contact-us/president',
				templateUrl: 'partials/contact-us/contact-us-president.html'
			})
		;
		$urlRouterProvider.otherwise('/');
	});


})(angular.module('Exercise09', ['NavigationModule', 'HomeModule', 'AboutUsModule', 'ContactUsModule', 'ui.router']));
