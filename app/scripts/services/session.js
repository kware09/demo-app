'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.session
 * @description
 * # session
 * Constant in the demoSassApp.
 */
angular.module('demoSassApp')
  .constant('session', {username : '',
						password : '',
					    realname : '',
					    isAuthenticated : false,
					    currNetwork: '0',
					    networkName: '',
					    device: '',
					    page:'Dashboard'});
