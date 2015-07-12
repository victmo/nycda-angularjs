(function(app){

	app.value("RECIPES", [
	  {
	    "id": "0001",
	    "type": "donut",
	    "name": "Cake",
	    "ppu": 0.55,
	    "batters":
	      {
	        "batter":
	          [
	            { "id": "1001", "type": "Regular" },
	            { "id": "1002", "type": "Chocolate" },
	            { "id": "1003", "type": "Blueberry" },
	            { "id": "1004", "type": "Devil's Food" }
	          ]
	      },
	    "topping":
	      [
	        { "id": "5001", "type": "None" },
	        { "id": "5002", "type": "Glazed" },
	        { "id": "5005", "type": "Sugar" },
	        { "id": "5007", "type": "Powdered Sugar" },
	        { "id": "5006", "type": "Chocolate with Sprinkles" },
	        { "id": "5003", "type": "Chocolate" },
	        { "id": "5004", "type": "Maple" }
	      ]
	  },
	  {
	    "id": "0002",
	    "type": "donut",
	    "name": "Raised",
	    "ppu": 0.55,
	    "batters":
	      {
	        "batter":
	          [
	            { "id": "1001", "type": "Regular" }
	          ]
	      },
	    "topping":
	      [
	        { "id": "5001", "type": "None" },
	        { "id": "5002", "type": "Glazed" },
	        { "id": "5005", "type": "Sugar" },
	        { "id": "5003", "type": "Chocolate" },
	        { "id": "5004", "type": "Maple" }
	      ]
	  },
	  {
	    "id": "0003",
	    "type": "donut",
	    "name": "Old Fashioned",
	    "ppu": 0.55,
	    "batters":
	      {
	        "batter":
	          [
	            { "id": "1001", "type": "Regular" },
	            { "id": "1002", "type": "Chocolate" },
	            { "id": "1003", "type": "Sugar" }
	          ]
	      },
	    "topping":
	      [
	        { "id": "5001", "type": "None" },
	        { "id": "5002", "type": "Glazed" },
	        { "id": "5003", "type": "Chocolate" },
	        { "id": "5004", "type": "Maple" }
	      ]
	  }
	]);

	app.filter('SSLFilter', function(){
		return function(items, isSSL){
			if(isSSL === true || isSSL === false){
				return items.filter(function(item){
					return (isSSL ? /^https/ : /^http:/).test(item.url);
				});
			}
			return items;
		};
	});

	app.controller('FiltersCtrl', function(RECIPES, $filter){
		var self = this;
		self.recipes = RECIPES;
		self.filterObject = {};
	});

	app.filter('ToppingFilter', function(){
		return function(items, topping){
			if(topping){
				var regex = new RegExp(topping, 'i');
				return items.filter(function(item){
					for (var i = 0; i < item.topping.length; i++) {
						//console.log(topping + '->' + item.topping[i].type);
						if(regex.test(item.topping[i].type)) return true;
					}
				});
			}
			return items;
		};
	});

})(angular.module('Exercise13', []));
