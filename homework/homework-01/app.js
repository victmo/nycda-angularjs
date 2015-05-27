var myModule = angular.module('Homework01', []);  // params: nameOfModule, [dependencies]

myModule.controller('ThemeCtrl', function(){
	var self = this;
	


	// Themes ____________________________________________

	self.themes = [
		{name: 'None', class: ''},
		{name: 'Success', class: 'th0'},
		{name: 'Sky', class: 'th1'},
		{name: 'Warning', class: 'th2'},
		{name: 'Danger', class: 'th3'},
		{name: 'Night', class: 'th4'}
	];
	self.selectedTheme = self.themes[0].class; // Default
	


	// Folders ____________________________________________
	
	self.fileStructure = [
		{folder: 'Personal', files: ['Finances.xls','Profile.jpg','Cat.jpg','Notes.txt']},
		{folder: 'Work', files: ['Secret project.doc','Analysis.xls','ID.jpg']},
		{folder: 'Trip', files: ['Beach.jpg','Bar.jpg','Friends.jpg','Hotel reservation.txt']}
	];


});