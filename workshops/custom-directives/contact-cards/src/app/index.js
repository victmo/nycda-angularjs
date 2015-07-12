'use strict';

angular.module('Lesson06', ['GDHome', 'GDContacts', 'GDAboutUs', 'ui.router'])
	.constant('ROUTE_STATES', {
		kHomeState: {
			stateName: 'home'
		}, 
		kAboutUsState: {
			stateName: 'aboutUs'
		},
		kAboutUsContentState: {
			stateName: 'aboutUs.content'
		},
		kContactsState: {
			stateName: 'contactUs'
		},
		kCEOState: {
			stateName: 'contactUs.ceo'
		}, 
		kPresidentState: {
			stateName: 'contactUs.pres'
		},
		kFounderState: {
			stateName: 'contactUs.founder'
		}
	})

	.config(function ($stateProvider, $urlRouterProvider, ROUTE_STATES) {
		
		$stateProvider
		.state(ROUTE_STATES.kHomeState.stateName, {
			url: '/',
			templateUrl: 'app/partials/home/home-main.html',
			controller: 'HomeCtrlMain as main'
		})
		.state(ROUTE_STATES.kAboutUsState.stateName, {
			url: '/about-us/:contactId',
			templateUrl: 'app/partials/about-us/about-us-main.html',
			controller: 'AboutUsCtrlMain as ctrl',
			// params: {
			// 	contactId: null
			// }
		})
		.state(ROUTE_STATES.kContactsState.stateName, {
			url: '/contact',
			templateUrl: 'app/partials/contact-us/contact-main.html',
			controller: 'ContactsCtrlMain as ctrl'
		})
		.state(ROUTE_STATES.kCEOState.stateName, {
			templateUrl: 'app/partials/contact-us/ceo.html'
		})
		.state(ROUTE_STATES.kPresidentState.stateName, {
			templateUrl: 'app/partials/contact-us/pres.html'
		})
		.state(ROUTE_STATES.kFounderState.stateName, {
			templateUrl: 'app/partials/contact-us/founder.html'
		});

		$urlRouterProvider.otherwise('/');
	})

	.service('PhoneBookApp', function(PhoneBook, Contact){
		this.phonebook = new PhoneBook();
		this.phonebook.addContact(new Contact('Victor', '203-123-3453'));
	})

	.factory('Contact', function(){
		function Contact(name, phone){
			this.id = null;
			this.name = name;
			this.phone = phone;
		}
		return Contact;
	})

	.factory('PhoneBook', function(){
		function PhoneBook(){
			this.contacts = [];
			this.addContact = function(contact){
				this.contacts.push(contact);
				contact.id = this.contacts.length;
			};
		}
		return PhoneBook;
	})

	.directive('contactCard', function(){
		return {
			templateUrl: 'app/partials/contact-card.html',
			controller: 'ContactCardCtrl as ctrl',
			scope: { // can do true, but it's best practice to use an empty obj.
				contact: '=contactCard',
				onDeleted: '&'
			},
			bindToController: true // creates the variable in the controller
		};
	})
	.controller('ContactCardCtrl', function($state){
		var self = this;
		self.onEdit = function () {
			$state.go('aboutUs', {contactId: self.contact.id});
		};
		self.isDeleting = false;
		self.onDelete = function(){
			self.isDeleting = true;
		};
		self.onCancel = function(){
			self.isDeleting = false;
		};
		self.onConfirm = function(){
			self.onDeleted({theContact: self.contact}); // the placeholder we used in our html
			self.isDeleting = false;
		};

	})
;
