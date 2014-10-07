'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.authenticate
 * @description
 * # authenticate
 * Factory in the demoSassApp.
 */
angular.module('demoSassApp')
  .factory('authenticate', function ($http) {
    // Service logic
    // ...
    var factory = {};

    factory.login = function(user){
      return $http.get('http://mdev.wishbone.ie/rns/api.php?cmd=WBAPI_GetListOfNetworks&uid='+user.username+'&pass='+user.password);
};
    return factory;
  });
