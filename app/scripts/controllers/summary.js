'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('SummaryCtrl', function ($scope,$location,devices,session,storageBoxes,$rootScope) {
    $scope.defaultNetwork = 0;
    $scope.networkName = session.networkName;
    devices.getDevices(session.currNetwork,session.username,session.password).success(function(data){
            $scope.totalDevices =data.noOfItems;
    	 })
    	 .error(function(data){
            console.log('error');
            console.log(data);
    	 });
    $scope.goToNetworks = function(){
    	$rootScope.$broadcast('NAV_TO','Networks');
    	$location.path('/settings');

    };

    /*$rootScope.$on('NAV_TO',function(){
        console.log(session.networkName+' ddd');
      $scope.networkName = session.networkName;
    });*/

    $scope.goTo= function(loc){
    	$rootScope.$broadcast('NAV_TO',loc);
    	$location.path('/'+loc);

    };

    $scope.logout =function(){

        session.isAuthenticated = false;
        session.realname='';
        session.username='';
        session.password='';
      $rootScope.$broadcast('LOG_OFF','login');
           $location.path('/login');
    
    };
  });
