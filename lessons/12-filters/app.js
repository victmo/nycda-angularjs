(function(app){

	app.value('Items', [
		{
			'title': 'AngularJS',
			'url': 'https://angularjs.org/',
			'description': 'HTML enhanced for web apps!',
			'logo': 'angular.png'
		},
		{
			'title': 'BrowserSync',
			'url': 'http://browsersync.io/',
			'description': 'Time-saving synchronised browser testing.',
			'logo': 'browsersync.png'
		},
		{
			'title': 'GulpJS',
			'url': 'http://gulpjs.com/',
			'description': 'The streaming build system.',
			'logo': 'gulp.png'
		},
		{
			'title': 'Jasmine',
			'url': 'http://jasmine.github.io/',
			'description': 'Behavior-Driven JavaScript.',
			'logo': 'jasmine.png'
		},
		{
			'title': 'Karma',
			'url': 'http://karma-runner.github.io/',
			'description': 'Spectacular Test Runner for JavaScript.',
			'logo': 'karma.png'
		},
		{
			'title': 'Protractor',
			'url': 'https://github.com/angular/protractor',
			'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
			'logo': 'protractor.png'
		},
		{
			'title': 'Bootstrap',
			'url': 'http://getbootstrap.com/',
			'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
			'logo': 'bootstrap.png'
		},
		{
			'title': 'Sass (Node)',
			'url': 'https://github.com/sass/node-sass',
			'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
			'logo': 'node-sass.png'
		}
	]);

	app.filter('SSLFilter', function(){
		return function(items, isSSL){
			if(isSSL === true || isSSL === false){
				return items.filter(function(item){
					return (isSSL ? /^https/ : /^http:/).test(item.url);
				});
			}
			return items;
		};
	});

	app.controller('FiltersCtrl', function(Items, $filter){
		var self = this;

		initialfilterObject = {
			url: "http"
		};
		
		self.items = $filter('filter')(Items, initialfilterObject);

	});

})(angular.module('Exercise12', []));
