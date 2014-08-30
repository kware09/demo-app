'use strict';

/**
 * @ngdoc overview
 * @name demoSassApp
 * @description
 * # demoSassApp
 *
 * Main module of the application.
 */
angular
  .module('demoSassApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        access: {isFree:true}
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        access: {isFree:true}
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        access: {isFree:false}
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location','session', function($rootscope, $location, session) {
$rootscope.$on('$routeChangeSuccess', function(event,curView) { 
  console.log(curView);
  if (curView === undefined){
    if(!session.isAuthenticated){
      $location.path('#/login');
  }
  }
  else{
  if(!curView.access.isFree && !session.isAuthenticated){
      $location.path('#/login');
  }}});
}]);
