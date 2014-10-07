'use strict';

describe('Controller: ApllicationCtrl', function () {

  // load the controller's module
  beforeEach(module('demoSassApp'));

  var ApllicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApllicationCtrl = $controller('ApllicationCtrl', {
      $scope: scope
    });
  }));

});
