#Angular JS - Class Notes

## App bootstrapping

```html
<body ng-app="AppName">
```

##Directives

Special attributes in your HTML that bind your elements somehow to Angular

Example of directives:

- `ng-app`
- `ng-controller`
- `ng-bind`
- `ng-repeat`

##Binding `ng-bind`

Double bracket way (lower performance because of string evaluation)

```html
<span>{{value}}</span>
```

With directives:

```html
<span ng-bind="value"></span>
```

##Repeater (Iterator) `ng-repeat`

Array (value only)

```html
<li ng-repeat="value in array">
	<span ng-bind="value"></span>
</li>
```

Array (index and value)

```html
<li ng-repeat="(index, value) in array">
	<span ng-bind="value.prop"></span>
</li>
```

Object (key and value)

```html
<li ng-repeat="(key, value) in object">
	<span ng-bind="value.prop"></span>
</li>
```

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

```html
<span ng-bind="::ctrl.value"></span>
```

#Utility methods

- `angular.copy()` Clones an object, controller, etc.
- `angular.equals(obj1, obj2)` Returns *true* if all the properties of the two objects are the same. In plain js, two objects are not the same even if their props are the same.
- `angular.forEach(obj, function(value, key))` You cannot `break` out of it.
- `angular.extend(overridenObj, obj1, objN)` Merges objects, same as jQuery extend. Doesn't do a deep copy. Precedence to parameters on right.

More info: [Angular function components](https://docs.angularjs.org/api/ng/function)

#Dependency injection

```javascript
.controller(
	"name-of-controller",
	function( $service1, $service2 ){}
)
```

Sometimes there are problems when trying to **uglyfy** Angular code. In this cases we can use an alternative notation:

```javascript
.controller(
	"name-of-controller", [
		"$service1", 
		"$service2", 
		function($map-to-$service1, $map-to-service2)]){}
	]
)
```

*Some people call **services**: **providers***

#Watching props

This is considered a **bad practice** because it adds more stuff to the watch list, hence the digest cycle.

- `$scope.$watch(prop, function(newVal, oldVal){})` Watches changes on primitive objects
- `$scope.$watchCollection(prop, fn(o, n))` Watches changes on objects and arrays, one level down
- `$scope.$watch(prop, fn(o, n), true)` Watches all changes on an object recursively.

#Custom services

These are Angular's types of services

- **Value** A global variable
- **Constant** A global variable that can be accessed by `config()`
- **Factory**: A way of creating objects or instances of things. The public of a Factory is the return statement.
- **Service**: Don't have a return statement. The entire function is available to the controller. For example, this can also be used to manage a collection of factories.
- Provider

#Config `module.config(fn())`

Get's calles between **Compilation** and **Runtime**.

Config can **only** take *constants* as services, not *values*.

Values and Constants are the same thing but for readability purposes only constants can be called by config().

#Providers

When injected into `config()`, you **always** have to append the word `Provider`.

If your provider's name is `MyProv` then when injected you have to call it `MyProvProvider`.

You have to assign a `$get` function, **always**.

A **Provider** has two APIs. One for `config()` and another one for the rest of the methods.

```javascript
app.provider('UserPermissions', function(){
	var self = this;
	var permissions;
	
	// This API is only available to config()
	self.setPermissions = function(p){
		permissions = p;
	}
	
	self.$get = function(){
		return {
			// This API is available to the rest of methods
			getPermissions: function(){
				return angular.copy(permissions);
			}
		}
	}
});

app.config(function(UserPermissionsProvider){
	var permissions = [7,5,5];
	UserPermissionsProvider.setPermissions(permissions);
})

app.controller('someController', function(UserPermissions){
	var self = this;
	self.permissions = UserPermissions.getPermissions();
})
```


#Custom Directives

It's declare like a regular service and it has to return an object definition with these properties:

- **template** - html to be inserted inside the directive element
- **restrict** - how we want the directive to be used (default EA):
	- **E** - Element name `<my-directive>`
	- **A** - Attribute `<div my-directive></div>`
	- **C** - Class `<div class="">`
	- **M** - Comment `<!-- directive: my-directive -->`
- **controller** - The controller we want to bind to the custom directive. **Only one controller gets created** and it controls all your directives.
- **scope** - If not specified it inherits the parent's scope. You have access to the parent's scope, just like ng-repeat. *The best practice is to specify it to make it more granular (independent of parents)*. Default: `false` = inherence. If you define as scope, **a new controller gets created per directive**.
	- **@** Raw text (no interpolation)
	- **=** Reference (will process the value inside the attr, just like ng-bind).
	- **&** A function that gets called every time **inside the directive's controller scope**
- **link** - lorem
- **oteher** - lorem
- **oteher** - lorem

To use different vars form attributes to controller:

```js
scope: {
	localValue: '=externalValue'
}

// You can pass the name of the directive!
scope: {
	localValue: '=myDirective'
}

// <div my-directive="something">
```


Optional attributes

```javascript
scope: {
	attr: '=?'
}
```




#Gulp workflow

Install **Node**, **npm**, **Gulp**, **Bower**, **Yeoman** and an **Angular Generator for Yeoman**

```
$ npm install --global yo
$ npm install -g gulp
$ npm install -g bower
$ npm install -g generator-gulp-angular
```

Generate an Angular project with **Yeoman**.

**Note:** Every time you start a new project, is a good idea to update your generator! `npm install -g generator-gulp-angular`.

```
$ mkdir project
$ cd project
$ yo gulp-angular ProjectName --skip-install
```

Once you have your project setup or you downloaded or cloned a project, use **Bower** and **npm** to initialize and download all required components.

```
$ bower install
$ npm install
```

To test your site, test the built-in server

```
$ gulp serve
```

For more info go to: https://github.com/Swiip/generator-gulp-angular  