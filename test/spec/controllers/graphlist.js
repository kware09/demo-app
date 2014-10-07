'use strict';

describe('Controller: GraphlistCtrl', function () {

  // load the controller's module
  beforeEach(module('demoSassApp'));

  var GraphlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraphlistCtrl = $controller('GraphlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
