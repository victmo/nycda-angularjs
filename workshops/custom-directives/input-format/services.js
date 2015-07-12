(function(app){


	var data = { foo: 'bar'};
	app.value('DATA_VALUE', data);


	app.constant('DATA_CONSTANT', 'Lorem ipsum');


	app.factory('Car', function(){ // George adds DTO to factories names (Data Transfer Object)
		function Car(model, year){
			var self = this;
			self.model = model;
			self.year = year;
			self.age = 2015-self.year;
		}
		Car.prototype.updateAge = function(){ 
			this.age = 2015-this.year;
		};
		return Car;
	});


	app.service('Calculator', function(){
		var self = this;
		self.sum = function(a, b){ return a + b; };
		self.substract = function(a, b){ return a - b; };
		self.divide = function(a, b){ return a / b; };
		self.multiply = function(a, b){ return a * b; };
		// It automatically returns `this`
	});


})(angular.module('Exercise04ValueService', []));

