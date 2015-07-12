var myModule = angular.module('Exercise02', []);  // params: nameOfModule, [dependencies]

myModule.controller('EditCtrl', function(){  // params: nameOfController, function <the ctrl code>
	var self = this;

	self.editing = false;

	self.contact = {
		name:'Victor',
		lastname:'Marquez',
		email:'victmo@gmail.com'
	};

	self.edit = function(){
		self.temp = angular.copy(self.contact);
		self.editing = true;
	};

	self.cancel = function(){
		self.editing = false;
	};

	self.save = function(){
		self.editing = false;
		angular.extend(self.contact, self.temp);
	};
	
});