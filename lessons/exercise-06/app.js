(function(app){


	app.factory('People', function($resource){
		return $resource(
			'data/people.json', // url
			null, // placeholders
			{
				get: {
					method: 'GET',
					isArray: true,
					headers: { Accept: "application/json" }
				}
			}
		);
	});

	app.factory('Friends', function($resource){
		return $resource(
			'data/:userId/profile.json', // url
			{ userId: '@userId' }, // placeholder (userId)
			{
				get: {
					method: 'GET',
					isArray: true,
					headers: { Accept: "application/json" }
				}
			}
		);
	});


	app.controller('PeopleFriends', function(People, Friends, debounce){
		var self = this,
			peopleApi = People,
			friendsApi = Friends
		;

		self.people = [];
		
		peopleApi.get(null).$promise.then(
			
			function(response){ // Success
				self.people = response;
			},
			
			function(error){
				console.error('Could not load people');
			}
		);

		self.loadFriends = function(person){
			friendsApi.get({userId:person._id}, 

				function(response){ // Success
					person.friends = response;
				},
				
				function(error){
					person.isError = true;
					person.friends = [{name:'Could not load friends'}];
				}
			);
		};

	});

	// `ngResource` is a module, so we add that dependency to out app module.
	// `$resource` is the service we use to interact with ngResource
	// **URL**: It takes a URL that can be a regular URL or use can use placeholders i.e. `/api/user/:userId/home`	
	// **Param defaults**: Object with default values passed
	// **Actions object**: method, headers, data type, etc.



})(angular.module('Exercise06', ['ngResource']));
