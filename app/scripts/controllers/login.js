'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('LoginCtrl', function ($scope,$location,authenticate,session) {
    $scope.errorOccurred=false;
    $scope.login = function(){
    	/*authenticate.login(user)
    	 .success(function(data){
    	 	session.username = user.username;
    	 	session.password = user.password;
    	 	session.realname = data.realname;
    	 	session.isAuthenticated =data.status;
    	 	console.log(session.isAuthenticated);
    	 	if(!session.isAuthenticaded){
    	 		$location.path('/main');
    	 	}
    	 	else
    	 	{
    	 		$scope.loginError ='Invlaid Login Details';
    	 		$scope.errorOccurred=true;

    	 	}

    	 })
    	 .error(function(){
    	 	$scope.loginError ='Invlaid Login Details';
    	 	$scope.errorOccurred=true;
    	 });*/
        session.isAuthenticated = true;
        session.realname='Kieran Ware';
        $location.path('/main');
    };
 

  });
