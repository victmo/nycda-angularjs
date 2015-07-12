(function(app){

	app.controller('FormsCtrl', function($filter){
		var self = this;

		self.onSubmit = function(){
			self.errors = {};
			var errs;
			for (var type in self.myForm.$error) {
				errs = self.myForm.$error[type];
				for (var i = 0; i < errs.length; i++) {
					self.errors[errs[i].$name] = "You have an error of type: " + type;
				}
			}
			console.log(self.errors);
		};
	});


})(angular.module('Exercise11', []));
