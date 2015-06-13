var myModule = angular.module('Exercise03', []);  // params: nameOfModule, [dependencies]

myModule.controller('CountdownCtrl', function($timeout){  // params: nameOfController, function <the ctrl code>
	var self = this;

	self.countdown = 10;
	
	function updateCount(){
		$timeout(function(){
			self.countdown--;
			if(self.countdown > 0) updateCount();
			else console.log('Done!');
		}, 1000);
	}

	updateCount();
	
});