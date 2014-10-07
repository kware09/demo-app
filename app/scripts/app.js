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
    'snap',
    'angles',
    'highcharts-ng'
  ])
  .config(function ($routeProvider,$httpProvider,snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
    $routeProvider
      .when('/', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl',
        access: {isFree:false}
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
      .when('/graphs', {
        templateUrl: 'views/graphs.html',
        controller: 'GraphsCtrl',
        access: {isFree:false}
      })
      .when('/commands', {
        templateUrl: 'views/commands.html',
        controller: 'CommandsCtrl',
        access: {isFree:false}
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        access: {isFree:false}
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        access: {isFree:false}
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl',
        access:{isFree:false}
      })
      .when('/devices', {
        templateUrl: 'views/devices.html',
        controller: 'DevicesCtrl',
        access:{isFree:false}
      })
      .when('/graphlist', {
        templateUrl: 'views/graphlist.html',
        controller: 'GraphlistCtrl',
        access:{isFree:false}
      })
      .otherwise({
        redirectTo: '/summary',
        access:{isFree:false}
      });
     
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
  }).run(['$rootScope', '$location','session', function($rootscope, $location, session) {
$rootscope.$on('$routeChangeSuccess', function(event,curView) { 

  
  if(!curView.access.isFree && !session.isAuthenticated){
      $location.path('/login');
  }});
}]);
