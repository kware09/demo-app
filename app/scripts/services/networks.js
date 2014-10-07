'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.networks
 * @description
 * # networks
 * Factory in the demoSassApp.
 */
angular.module('demoSassApp')
  .factory('networks', function ($http) {
    // Service logic
    // ...
    var factory = {};

    factory.getNetworks = function(username,password){
      return $http.get('http://mdev.wishbone.ie/rns/api.php?cmd=WBAPI_GetListOfNetworks&uid='+username+'&pass='+password);
    };

    return factory;
  });
