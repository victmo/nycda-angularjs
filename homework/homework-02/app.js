(function(app){

	app.controller('SimonCtrl', function(Simon){
		var self = this;
		self.simon = new Simon(
			[
				{name: 'Yellow', class: 'yellow'},
				{name: 'Red', class: 'red'},
				{name: 'Green', class: 'green'},
				{name: 'Blue', class: 'blue'}
				//,{name: 'Orange', class: 'orange'}
				//,{name: 'Purple', class: 'purple'}
				// You can add as many colors as you want...
			], 
			0.65, // animation speed in seconds
			true // classic mode? If false the pattern will change every level
		);
	});

	app.factory('Simon', function(SimonColor, $timeout){
		function Simon(colors, speed, classicMode){ // speed = animation seconds
			var self = this;
			var s  = speed || 1;
			var classic = typeof(classicMode)==='undefined' ? true : classicMode;
			self.interactive = false;
			self.gameOver = true;
			self.colors = [];
			for (var i = 0; i < colors.length; i++) {
				self.colors.push(new SimonColor(colors[i].name, colors[i].class));
			}

			function setSimonTurn(){
				self.feedback = "Simon's turn";
				self.userTurn = false;
				self.interactive = false;
				self.currentSequence = [];
				addColor();
				function showColor(i){
					var color = self.machineSequence[i];
					color.class.active = true;
					self.currentSequence.push(color);
					$timeout(function(){ color.class.active = false; }, 500*s);
					if(i+1 < self.machineSequence.length){
						$timeout(function(){ showColor(i+1); }, 1000*s);
					}else{
						$timeout(function(){ setUserTurn(); }, 500*s);
					}
				}
				showColor(0);
			}

			function setUserTurn(){
				self.feedback = "Your turn";
				self.userTurn = true;
				self.interactive = true;
				self.currentSequence = [];
			}

			function addColor(){
				var randColorIndex,
					start = 0;
					len = self.machineSequence.length
				;
				if(!classic) start = len; // if playing non-classic mode, we change the whole sequence

				for(var i=start; i<=len; i++){
					randColorIndex = ~~(Math.random() * self.colors.length);
					self.machineSequence[i] = self.colors[randColorIndex];
				}
				self.level = len+1;
			}
			
			self.onClick = function(color){
				if(!self.interactive) return;
				self.currentSequence.push(color);
				var i = self.currentSequence.length - 1;
				if(self.currentSequence[i] !== self.machineSequence[i]){
					self.feedback = "Sorry that was not the right color.";
					self.gameOver = true;
					self.interactive = false;
					color.isCorrect = false;
					return;
				}else{
					color.isCorrect = true;
				}
				if(self.currentSequence.length == self.machineSequence.length){
					self.feedback = "Well done!";
					self.interactive = false;
					$timeout(function(){ setSimonTurn(); }, 1500*s);
				}
			};
			
			self.onPress = function(color){
				if(!self.interactive) return;
				color.class.active = true;
			};
			
			self.onLeave = function(){
				if(!self.interactive) return;
				for(var i = 0; i < self.colors.length; i++){
					self.colors[i].class.active = false;
				}
			};

			self.onStart = function(speed, classicMode) {
				// we can change the animation speed and game mode on new game
				s  = speed || s;
				classic = typeof(classicMode)==='undefined' ? true : classic;
				self.machineSequence = [];
				self.currentSequence = [];
				self.gameOver = false;
				self.interactive = false;
				self.feedback = "Let's begin";
				$timeout(function(){ setSimonTurn(); }, 1000*s);
			};
			return self;
		}
		return Simon;
	});



	app.factory('SimonColor', function(){
		function SimonColor(name, cssClass){
			var self = this;
			self.name = name;
			self.class = {};
			self.class[cssClass] = true;
			self.class.active = false;
		}
		return SimonColor;
	});

})(angular.module('SimonGame', []));
