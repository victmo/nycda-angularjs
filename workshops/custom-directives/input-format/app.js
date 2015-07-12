(function(app){

	app.controller('FormatDemo', function(){
		var self = this;
		self.prepend = '$';
		self.append = '%';
		self.result = 123456.78;
		self.output = self.result;
	});

	app.directive('numberFormat', function ($filter) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
				if (!ctrl) return;

				function format(n){
					return n === null ? null : (attrs.prepend || '') + parseFloat(n).toLocaleString() + (attrs.append || '');
				}
				function parse(n){
					return parseFloat(n.replace(/[^\d|\-+|\.+]/g, ''));
				}

				ctrl.$formatters.unshift(function (val){
					return format(val);
				});

				ctrl.$parsers.unshift(function (val){ 
					var plain = parse(val);
					return isNaN(plain) ? null : plain;
				});

				element.on('focus', function () {
					element.val(ctrl.$modelValue);
				});

				element.on('blur', function () {
					element.val(format(ctrl.$modelValue));
				});

			}
		};
	});

})(angular.module('NumberFormatApp', []));