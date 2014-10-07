'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:GraphlistCtrl
 * @description
 * # GraphlistCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('GraphlistCtrl', function ($scope,devices,session,$location,$rootScope) {
   
   $scope.graphs = [];
   var graph = {};
    var i;
   devices.getDevices(session.currNetwork,session.username,session.password).success(function(data){
    	$scope.data = data.items;

    	for (i = 0; i < $scope.data.length; i++) { 
   		var str = $scope.data[i].device_description;
		  var n = str.indexOf(',');  
		  var n1 = str.indexOf(',',parseInt(n+1));
		  /*var n2 = str.indexOf(',',parseInt(n1+1));
		  var n3 = str.indexOf(',',parseInt(n2+1));
		  var n4 = str.indexOf(',',parseInt(n3+1));
		  var n5 = str.indexOf(',',parseInt(n4+1));
		  var n6 = str.indexOf(',',parseInt(n5+1));
		  var n7 = str.indexOf(',',parseInt(n6+1));
		  var n8 = str.indexOf(',',parseInt(n7+1));*/

		  graph = {deviceName: str.substring(n+1,n1-n+1)};

		  console.log(graph);

		  $scope.graphs.push(graph);

			}

		 console.log($scope.graphs);
		    })
    .error(function(){

    });

    $scope.openGraph = function(device){

    	session.device = device;
    	$rootScope.$broadcast('NAV_TO','Graphs');
    	$location.path('/graphs');
    };

   
  });
