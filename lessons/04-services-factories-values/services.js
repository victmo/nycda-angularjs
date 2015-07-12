(function(app){

	
	// The factory

	app.factory('Student', function(Calculator){
		function Student(name, assignments){
			this.name = name;
			this.assignments = assignments || [];
			this.updateStats();
		}
		Student.prototype.updateStats = function(){
			this.average = Calculator.getAverage(this.assignments);
			this.grade = Calculator.getGrade(this.average);
			this.passed = Calculator.isPassed(this.grade);
		};
		Student.prototype.addAssignment = function(assignment) {
			this.assignments.push(assignment);
			this.updateStats();
		};
		Student.prototype.removeAssignment = function(assignment) {
			this.assignments.splice(this.assignments.indexOf(assignment), 1);
			this.updateStats();
		};
		return Student;
	});

	app.factory('Assignment', function(){
		function Assignment(name, score){
			this.name = name;
			this.score = score;
		}
		return Assignment;
	});



	// The service

	app.service('Calculator', function(GRADES){
		var self = this;
		
		self.getAverage = function(assignments){
			var len = assignments.length, total = 0;
			if(len === 0) return 100;
			for(var i = 0; i < len; i++) total += assignments[i].score;
			return total / len;
		};

		self.getGrade = function(score){
			var g, len = GRADES.length;
			for(var i = len-1; i >= 0; i--){

				if(GRADES[i].min > score) return g;
				g = GRADES[i].grade;
			}
			return g;
		};

		self.isPassed = function(grade){
			return grade !== 'F';
		};
	});

	

	// The value

	app.value('GRADES', [
		{ grade: 'A', min: 90 },
		{ grade: 'B', min: 80 },
		{ grade: 'C', min: 70 },
		{ grade: 'D', min: 60 },
		{ grade: 'F', min: 0 }
	]);


})(angular.module('Exercise04Services', []));
