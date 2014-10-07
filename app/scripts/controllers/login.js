'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('LoginCtrl', function ($scope,$location,authenticate,session,$rootScope) {
    $scope.errorOccurred=false;
    $scope.login = function(user){
    	authenticate.login(user)
    	 .success(function(data){
            console.log(data);
    	 	session.username = user.username;
    	 	session.password = user.password;
            session.currNetwork = data.items[0].ds_id;
            session.networkName = data.items[0].ds_name;
            if (data.status === 0){
    	 	session.isAuthenticated =true;
         }else{
            session.isAuthenticated =false;
         }
    	 	if(session.isAuthenticated){
                $rootScope.$broadcast('LOG_IN');
    	 		$location.path('/summary');
    	 	}
    	 	else
    	 	{
    	 		$scope.loginError ='Invlaid Login Details';
    	 		$scope.errorOccurred=true;

    	 	}

    	 })
    	 .error(function(data){
            console.log('error');
            console.log(data);
    	 	$scope.loginError ='Invlaid Login Details';
    	 	$scope.errorOccurred=true;
    	 });
        /*session.isAuthenticated = true;
        session.realname='Kieran Ware';
        $location.path('/main');*/
    };
 

  });
