#Angular JS - Class Notes

## App bootstrapping

````html
<body ng-app="AppName">
````

##Directives
Special attributes in your HTML that bind your elements somehow to Angular

Example of directives:

- `ng-app`
- `ng-controller`
- `ng-bind`
- `ng-repeat`

##Binding `ng-bind`
Double bracket way (lower performance because of string evaluation)

````html
<span>{{value}}</span>
````

With directives:

````html
<span ng-bind="value"></span>
````

##Repeater (Iterator) `ng-repeat`
Array (value only)

````html
<li ng-repeat="value in array">
	<span ng-bind="value"></span>
</li>
````

Array (index and value)

````html
<li ng-repeat="(index, value) in array">
	<span ng-bind="value.prop"></span>
</li>
````

Object (key and value)

````html
<li ng-repeat="(key, value) in object">
	<span ng-bind="value.prop"></span>
</li>
````

Additional properties of a repeater

- `$index` Index of current iteration
- `$first` Is it the first iteration? *bool* 
- `$middle` Is it between first & last?
- `$last` Is it the last?
- `$even` Is it even?
- `$odd` Is it odd?

## Classes `ng-class`

## Input value `ng-value`