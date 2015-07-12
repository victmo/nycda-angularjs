(function (app) {

	app.controller('HomeCtrlMain', function(PhoneBookApp) {
		var self = this;
		self.phonebook = PhoneBookApp.phonebook;
		self.deleteContact = function(contact){
			//console.log(contact);
			self.phonebook.contacts.splice(self.phonebook.contacts.indexOf(contact), 1);
		};
	});
	
})(angular.module('GDHome', []));