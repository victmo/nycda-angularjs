(function(app){

	app.controller('MainCtrl', function($modal){
		var self = this;
		self.name = 'Victor';
		self.email = 'victmo@gmail.com';
		
		self.showModal = function(){
			var modal = $modal.open({
				templateUrl: 'modal.html',
				controller: 'ModalCtrl as m',
				resolve: { // to pass info form the main ctrl to the modal ctrl
					mainCtrlData: function() { // <-- This gets published as a service accesible to other controllers
						return {
							email: self.email,
							name: self.name
						};
					}
					//,mainCtrlName: function(){ return self.anotherVar } // You can return more than one fn, but easier to return an object
				}
			});

			modal.result.then(
				function (result) { // Suceess
					console.log('Modal success');
					console.log(result);
					self.name = result.name;
					self.email = result.email;
				}, 
				function (error) { // Dismiss
					console.log('Modal cancelled');
					console.log(error);
				}
			);
		};


	});





	app.controller('ModalCtrl', function($modalInstance, mainCtrlData){
		var self = this;
		
		self.name = ''; //mainCtrlData.name;
		self.email = ''; //mainCtrlData.email;

		self.onDone = function() { 
			$modalInstance.close({
				name: self.name,
				email: self.email
			});
		};

		self.onCancel = function() {
			$modalInstance.dismiss();
		};
	});


})(angular.module('Exercise14', ['ui.bootstrap']));
