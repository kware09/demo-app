'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.storageBoxes
 * @description
 * # storageBoxes
 * Factory in the demoSassApp.
 */
angular.module('demoSassApp')
  .factory('storageBoxes', function() {
    // Service logic
    // ...

    var factory = {};

    factory.storageBoxes = [{
      id: 1,
      name: 'Home Network',
      created: '01-JAN-2014',
      power: 1.2,
      online: true,
      selected: true,
      powerMeasure: 'Volts',
      noOfDevices: 4,
      devices: [{
        name: 'kitchen',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 95
      }, {
        name: 'bedroom',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 95
      }, {
        name: 'sitting room',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 95
      }]
    }, {
      id: 3,
      name: 'Johns Network',
      created: '01-JAN-2014',
      power: 0.011,
      online: false,
      selected: false,
      powerMeasure: 'Volts',
      noOfDevices: 4,
      devices: [{
        name: 'kitchen',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 70
      }, {
        name: 'bedroom',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 20
      }, {
        name: 'sitting room',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 65
      }]
    }, {
      id: 3,
      name: 'Toms Network',
      created: '01-JAN-2014',
      power: 0.122,
      online: true,
      selected: false,
      powerMeasure: 'Volts',
      noOfDevices: 4,
      devices: [{
        name: 'kitchen',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 95
      }, {
        name: 'bedroom',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 10
      }, {
        name: 'sitting room',
        type: 'endPoint',
        EPType: 'Tempreture Sensor',
        powerLeft: 95
      }]
    }];
    return factory;
  });