'use strict';



describe('Lesson06 - module', function() {
  beforeEach(module('Lesson06'));


  describe('MathExpression Service Test', function() {
      var toTest;

      beforeEach(inject(function(_MathExpression_){
        toTest = _MathExpression_;
      }));

      it('should calculate the average correctly', function() {
        var array = [1, 2, 3];
        var result = toTest.calculateAverage(array);

        expect(result).toBe(2);
      });
  });

  describe('Person Factory Test', function() {
    var toTestFactory;
    var toTest;

    beforeEach(inject(function(_PersonDTO_){
      toTestFactory = _PersonDTO_;
    }));

    it('it should take on the inialization values', function() { 
      toTest = new toTestFactory({fname: "George", lname: "Dagher"});

      expect(toTest.fname).toBe("George");
      expect(toTest.lname).toBe("Dagher");
    });

    it('it should take on the default when no config is passed', function() { 
      toTest = new toTestFactory();

      expect(toTest.fname).toBe("tom");
      expect(toTest.lname).toBe("ford");
    });

  });

  describe('Main Ctrl Test', function() {
    var toTest;
    var scope;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      toTest = $controller('MainCtrl', {$scope: scope});
    }));

    it('should have 9 things in array', function() { 
      expect(scope.awesomeThings.length).toBe(9);
    });
  });
});






// describe('controllers', function(){
//   var scope;

//   beforeEach(module('template'));

//   beforeEach(inject(function($rootScope) {
//     scope = $rootScope.$new();
//   }));

//   it('should define more than 5 awesome things', inject(function($controller) {
//     expect(scope.awesomeThings).toBeUndefined();

//     $controller('MainCtrl', {
//       $scope: scope
//     });

//     expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
//     expect(scope.awesomeThings.length > 5).toBeTruthy();
//   }));
// });
