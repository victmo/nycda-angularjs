(function  (app) {

  app.controller('ContactsCtrlMain', function(ROUTE_STATES) {
    var self = this;

    self.routes = angular.copy(ROUTE_STATES);
  });
    
})(angular.module('GDContacts', []));