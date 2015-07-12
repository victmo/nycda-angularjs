(function(app){

	app.controller('StudentCalculatorCtrl', function(Student, Assignment){
		var self = this;
		self.student = new Student('Victor Márquez');
		self.tempAssignment = new Assignment('', '');
		self.onAddAssignment = function(a){
			self.student.addAssignment(angular.copy(a));
			a.name = ''; a.score = '';
		};
	});

})(angular.module('Exercise04', ['Exercise04Services']));
