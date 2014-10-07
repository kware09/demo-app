'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('SettingsCtrl', function ($scope,$location,session,networks,$rootScope) {
    
    networks.getNetworks(session.username,session.password).success(function(data){
            console.log(data);
            $scope.networks =data.items;

    	 })
    	 .error(function(data){
            console.log('error');
            console.log(data);
    	 });

   

    console.log($scope.networks);

    $scope.dashboard = function(network){
    	$rootScope.$broadcast('NAV_TO','Dashboard');
      $location.path('/summary');
      session.currNetwork = network.ds_id;
      session.networkName = network.ds_name;
    };
  });
