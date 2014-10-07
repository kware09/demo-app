'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('EventsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
