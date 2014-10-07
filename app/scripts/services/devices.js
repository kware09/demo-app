'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.devices
 * @description
 * # devices
 * Factory in the demoSassApp.
 */
angular.module('demoSassApp')
  .factory('devices', function ($http) {
  // Service logic
    // ...
    var factory = {};

    factory.getDevices = function(network,username,password){
      return $http.get('http://mdev.wishbone.ie/rns/api.php?cmd=WBAPI_GetListOfDevices&uid='+username+'&pass='+password+'&ds_id='+network);
    };
    

    return factory;
  });
