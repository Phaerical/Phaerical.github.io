'use strict';

angular.module ('app', [
	'ngRoute',
	'ngAnimate',
	'app.controllers',
	'app.directives',
	'app.filters',
	'app.services',
	'ui.bootstrap',
	'ui.router'
])

.run (function ($rootScope, $state, $stateParams)
{
	// Give global access to $state and $stateParams
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})

.config (function ($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.otherwise ('/splash');

	$stateProvider
		.state ('splash', {
			url: '/splash',
			templateUrl: 'partials/splash.html'
		})
		.state ('main', {
			abstract: true,
			url: '/main',
			templateUrl: 'partials/main.html'
		})
		.state ('main.home', {
			url: '/home',
			templateUrl: 'partials/home.html'
		})
		.state ('main.projects', {
			url: '/projects',
			templateUrl: 'partials/projects.html'
		})
		.state ('main.resume', {
			url: '/resume',
			templateUrl: 'partials/resume.html'
		})
		.state ('main.contact', {
			url: '/contact',
			templateUrl: 'partials/contact.html'
		})
});