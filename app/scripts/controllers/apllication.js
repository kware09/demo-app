'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:ApllicationCtrl
 * @description
 * # ApllicationCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('ApllicationCtrl', function ($scope,$location,session,menu,$rootScope) {
  	$scope.loggedIn = session.isAuthenticated;
  	$scope.pageTitle = session.page;
  	$scope.menuOptions = menu.getMenuOptions();

    $rootScope.$on('NAV_TO',function(e,d){
      $scope.pageTitle=d;
    });

    $rootScope.$on('LOG_IN',function(){
      $scope.loggedIn=true;
    });
     $rootScope.$on('LOG_OFF',function(){
      $scope.loggedIn=false;
    });



  	$scope.setHeading = function(menuOption){
  		console.log(menuOption.menuName);
  		$scope.pageTitle=menuOption.menuName;
  			$scope.rightMenu = menuOption.rightMenu;
  			$scope.rightMenuOptions = menuOption.rightMenuOpt;

  	};

  

  	$scope.logout =function(){


  		session.isAuthenticated = false;
  		session.realname='';
  		session.username='';
  		session.password='';
      $scope.loggedIn=false;
 
  	
  	};

  	

   
  });
