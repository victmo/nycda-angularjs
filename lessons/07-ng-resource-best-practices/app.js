(function(app){

	app.factory('MapsApiResource', function($resource){
		return $resource(
			'http://maps.googleapis.com/maps/api/geocode/json', 
			null,
			{
				getAddresses: {
					//headers: { Accept: "application/json" }, // This is the default
					method: 'GET',
					isArray: false
				}
			}
		);
	});




	app.service('MapsApiService', function(MapsApiResource) {
		var self = this;

		self.getAddress = function(parameters, completionCallback) {
			MapsApiResource.getAddresses(parameters)
				.$promise.then(
					function onSuccess(response) {
						completionCallback(true, response);
					}, 
					function onError(error) {
						completionCallback(false, error);
					}
				)
			;
		};
	});




	app.service('MainCtrlService', function(MapsApiService) {
		var self = this;

		self.getFormattedAddresses = function(address, completionCallback) {
			MapsApiService.getAddress(
				{address: address}, // parameters
				function(isValid, response) { // completionCallback
					if (isValid) {
						completionCallback(true, response.results);
					} else {
						completionCallback(false);
					}
				}
			);
		};
	});




	app.controller('MainCtrl', function (MainCtrlService) {
		var self = this;

		self.onAddressChange = function(address) {
			MainCtrlService.getFormattedAddresses(
				address, 
				function(isValid, addressArray) {
					if (isValid) {
						self.addresses = addressArray;
					}
				}
			);
		};
	});



})(angular.module('Exercise07', ['ngResource']));
