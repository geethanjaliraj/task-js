// alert("hi");
var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider){
	var homeState = {
						"name": "home", 
						"url": "/home", 
						"templateUrl": "./home.html",
						
					}
	var contactState = {
						"name": "contact", 
						"url": "/contact", 
						"templateUrl": "./contact.html"
					}
	var emailState = {
						"name": "email", 
						"url": "/email", 
						"templateUrl": "./email.html"
					}
	$stateProvider.state(homeState);
	$stateProvider.state(contactState);
	$stateProvider.state(emailState);
});
