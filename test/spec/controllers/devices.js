'use strict';

describe('Controller: DevicesCtrl', function () {

  // load the controller's module
  beforeEach(module('demoSassApp'));

  var DevicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevicesCtrl = $controller('DevicesCtrl', {
      $scope: scope
    });
  }));

});
