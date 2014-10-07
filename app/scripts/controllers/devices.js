'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('DevicesCtrl', function ($scope,devices,session) {
    
    devices.getDevices(session.currNetwork,session.username,session.password).success(function(data){
    	$scope.devices = data.items;
    	console.log($scope.devices);
    })
    .error(function(){

    });



  });
