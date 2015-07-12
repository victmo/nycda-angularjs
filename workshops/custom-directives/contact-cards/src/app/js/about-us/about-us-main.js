(function (app) {

	app.controller('AboutUsCtrlMain', function(Contact, PhoneBookApp, $stateParams, $scope) {
		//console.log($stateParams);
		// $scope.$on('$destroy', function(){
		// 	console.log('booom');
		// });
		var self = this;
		
		self.phonebook = PhoneBookApp.phonebook;
		self.tempContact = new Contact();
		function getContact(id){
			console.log(self.phonebook.contacts);
			for(var i=0; i<self.phonebook.contacts.length; i++){
				if(self.phonebook.contacts[i].id == id){
					return self.phonebook.contacts[i];
				}
			}
			return null;
		}
		self.addContact = function(){
			self.phonebook.addContact(self.tempContact);
			self.tempContact = new Contact();
		};
		self.saveContact = function(){
			angular.extend(self.editableContact, self.tempContact);
			self.tempContact = new Contact();
		};
		self.cancelEdit = function(){
			self.editableContact = null;
			self.tempContact = new Contact();
		};

		self.editableContact = getContact($stateParams.contactId);
		if(self.editableContact){
			self.tempContact = angular.copy(self.editableContact);
			console.log('Editing:');
			console.log(self.editableContact);
		}
	});

})(angular.module('GDAboutUs', []));