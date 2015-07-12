var myModule = angular.module('Exercise00', []);  // params: nameOfModule, [dependencies]

myModule.controller('ControllerDemoCtrl', function($scope){  // params: nameOfController, function <the ctrl code>
	
	$scope.greeting = 'Hello World!';

	var self = this; // You can remove $scope if you go this route.
	self.greeting = 'Hola Mundo!';

	self.people = [
		{name: "Bill Clinton", age: 33 },
		{name: "Tom Ford", age: 40 },
		{name: "Michael Jordan", age: 52 }
	];
});




myModule.controller('ModelDemoCtrl', function(){
	var self = this;
	
	self.name = 'Victor';
	
	self.mirrorLength = function(){
		var m = self.name;
		m = m + ' (length: ' + m.length + ')';
		return m;
	};

	self.presidents = {
		clinton: {
			name: 'Bill',
			lastName: 'Clinton'
		},
		lincoln: {
			name: 'Abraham',
			lastName: 'Lincoln'
		}
	};


});