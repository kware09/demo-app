'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:CommandsCtrl
 * @description
 * # CommandsCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('CommandsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
