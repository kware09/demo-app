'use strict';

describe('Service: storageBoxes', function () {

  // load the service's module
  beforeEach(module('demoSassApp'));

  // instantiate service
  var storageBoxes;
  beforeEach(inject(function (_storageBoxes_) {
    storageBoxes = _storageBoxes_;
  }));

  it('should do something', function () {
    expect(!!storageBoxes).toBe(true);
  });

});
