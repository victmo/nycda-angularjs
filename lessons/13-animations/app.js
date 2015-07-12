(function(app){

	app.controller('AnimationCtrl', function(){
		var self = this;
		self.items = [1,2,3,4,5,6];
		self.remove = function(item){
			self.items.splice(self.items.indexOf(item), 1);
		};
		self.add = function(item){
			self.items.push(self.items.length+1);
		};
	});


})(angular.module('Exercise13', ['ngAnimate']));
