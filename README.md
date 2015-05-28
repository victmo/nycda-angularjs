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

- `$index` Index of current iteration.
- `$first` Is it the first iteration? *bool*.
- `$middle` Is it between first & last?
- `$last` Is it the last?
- `$even` Is it even?
- `$odd` Is it odd?

## Other directives

- `ng-class` Binds the element's class name to the value of this
- `ng-value` Binds the input's value to the value of this

## One-time binding `::`

Only updates an `ng-bind` when the apps loads. In other words, removes the **watcher** from an element.

````html
<span ng-bind="::ctrl.value"></span>
````

#Utility method

- `angular.copy()` Clones an object, controller, etc.
- `angular.equals(obj1, obj2)` Returns *true* if all the properties of the two objects are the same. In plain js, two objects are not the same even if their props are the same.
- `angular.forEach(obj, function(value, key))` You cannot `break` out of it.
- `angular.extend(overridenObj, obj1, objN)` Merges objects, same as jQuery extend. Doesn't do a deep copy. Precedence to parameters on right.

More info: [Angular function conponents](https://docs.angularjs.org/api/ng/function)

