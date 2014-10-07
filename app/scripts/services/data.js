'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.data
 * @description
 * # data
 * Factory in the demoSassApp.
 */
angular.module('demoSassApp')
  .factory('data', function ($http) {
   // Service logic
    // ...
    var factory = {};

    factory.getData = function(username,password,network){
      return $http.get('http://mdev.wishbone.ie/rns/api.php?cmd=WBAPI_GetActualData&uid='+username+'&pass='+password+'&ds_id='+network);
    };

    return factory;
  });
