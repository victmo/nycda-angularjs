(function(app){

	app.controller('CustomDirectivesCtrl', function($q){
		var self = this;
		self.totalIngredients = 0;
		self.mostRecentIngredient = null;
		self.onIngredientAdded = function(){
			self.totalIngredients ++;
		};
		self.updateMostRecent = function(ingredient){
			self.mostRecentIngredient = ingredient;
		};
	});



	app.directive('vmBasic', function(){
		return {
			template: '<span>This is a very basic <strong>custom directive</strong></span>'
		};
	});



	app.directive('vmBasicExternal', function(){
		return {
			templateUrl: 'partials/externalTemplate.html'
		};
	});



	app.directive('vmBasicControlled', function(){
		return {
			templateUrl: 'partials/withController.html',
			controller: 'VmBasicControllerCtrl',
			controllerAs: 'c'  // or... controller: 'Ctr as c'
		};
	});
	app.controller('VmBasicControlledCtrl', function(){
		var self = this;
		self.name = 'Victor';
	});



	app.directive('vmBasicScope', function(){
		return {
			templateUrl: 'partials/advancedTemplate.html',
			controller: 'VmBasicScopeCtrl as c',
			scope: { // can do true, but it's best practice to use an empty obj.
				recipeName: '@',
				onAddIngredient: '&',
				onUpdateRecent: '&'
			},
			bindToController: true // creates the variable in the controller
		};
	});
	app.controller('VmBasicScopeCtrl', function(){
		var self = this;
		self.recipe = [];
		self.newIngredient = {};
		self.addIngredient = function(){
			self.recipe.push(self.newIngredient);
			self.onAddIngredient();
			self.onUpdateRecent({userIngredientPlaceholder: self.newIngredient}); // the placeholder we used in our html
			self.newIngredient = {};
		};
	});

})(angular.module('Exercise10', []));
