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
    'ngTouch',
    'snap'
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
        redirectTo: '/',
        access:{isFree:true}
      });
  }).run(['$rootScope', '$location','session', function($rootscope, $location, session) {
$rootscope.$on('$routeChangeSuccess', function(event,curView,prevView) { 
  console.log(curView);
  console.log(prevView);
  console.log(curView.access);
  
  if(!curView.access.isFree && !session.isAuthenticated){
      $location.path('/login');
  }});
}]);
