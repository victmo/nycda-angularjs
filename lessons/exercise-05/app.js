(function(app){

	app.controller('DeferredCtrl', function($q){
		var self = this,
			count = 0,
			deferred = $q.defer() // Creates the deferred object
		;

		deferred.promise.then(
			function(){ // Success
				console.log('Deferred: Success');
			},
			function(){ // Error
				console.log('Deferred: Error');
			},
			function(param){ // Notify
				console.log('Deferred: Notify - ' + param);
			}
		);

		self.onClick = function(){
			console.log('Button clicked');
			
			if(count < 2) deferred.notify('Foo');
			else if(count == 7) deferred.reject();
			else deferred.resolve();

			count++;
		};
	});

	// Promises, once they're resolved or rejected, you can't use them anymore.
	// Not all deferred objects return notifications




	app.factory('GoogleMaps', function($resource){
		return $resource(
			'http://maps.googleapis.com/maps/api/geocode/json', 
			null,
			{
				address: {
					method: 'GET',
					isArray: false,
					headers: { Accept: "application/json" }
				}
			}
		);
	});


	app.controller('ResCtrl', function(GoogleMaps, debounce){
		var self = this,
			maps = GoogleMaps
		;

		self.places = [];
		
		function findAddress(addr){
			console.log('Requesting ' + addr);
			maps.address(
				{
					address: addr
				}
			).$promise.then(
				
				function(response){ // Success
					self.places = response.results;
				},
				
				function(error){ // Error
					console.error(error);
				}
			);
		}

		self.lazyFindAddress = debounce(findAddress, 600);
	});

	// `ngResource` is a module, so we add that dependency to out app module.
	// `$resource` is the service we use to interact with ngResource
	// **URL**: It takes a URL that can be a regular URL or use can use placeholders i.e. `/api/user/:userId/home`	
	// **Param defaults**: Object with default values passed
	// **Actions object**: method, headers, data type, etc.




	
	app.service('debounce', function ($timeout) {
		// Creates a debounced version of the function passed,
		// usefull for resizes or key events.
		// Based on the debounce implementation in uderscorejs
		// https://github.com/shahata/angular-debounce
		// TODO: use deferred
		return function (func, wait, immediate) {
			var timeout, args, context, result;
			function debounce() {
				context = this;
				args = arguments;
				var later = function () {
					timeout = null;
					if (!immediate) result = func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				if (timeout) $timeout.cancel(timeout);
				timeout = $timeout(later, wait);
				if (callNow) result = func.apply(context, args);
				return result;
			}
			debounce.cancel = function () {
				$timeout.cancel(timeout);
				timeout = null;
			};
			return debounce;
		};
	});

})(angular.module('Exercise05', ['ngResource']));
