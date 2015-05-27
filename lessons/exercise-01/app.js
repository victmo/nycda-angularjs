var myModule = angular.module('Exercisek01', []);  // params: nameOfModule, [dependencies]

myModule.controller('ContactsCtrl', function(){  // params: nameOfController, function <the ctrl code>
	var self = this;
	self.contacts = [
		{position:'CEO', name:'Bill', lastname:'Jackson'},
		{position:'President', name:'John', lastname:'Doe'},
		{position:'VP', name:'Peter', lastname:'Smith'},
		{position:'Founder', name:'David', lastname:'Johnson'}
	];

	self.selectedContact = self.contacts[0];
});