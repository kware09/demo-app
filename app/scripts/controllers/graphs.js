'use strict';

/**
 * @ngdoc function
 * @name demoSassApp.controller:GraphsCtrl
 * @description
 * # GraphsCtrl
 * Controller of the demoSassApp
 */
angular.module('demoSassApp')
  .controller('GraphsCtrl', function ($scope,$timeout) {


    $scope.chartData = [];
    $scope.chartConfig = {
        options: {
            chart: {
                type: 'line',
                zoomType: 'x'
            }
        },
        series: [{
            data: $scope.chartData
        }],
        xAxis: {type:'datetime'},
        loading: false
    };

    function addPoint()
    {
        var time = (new Date()).getTime(),
        rand;
        if ($scope.chartData.length >60){
            $scope.chartData.splice(0,1);
        } 
        rand = Math.random() * (32 - 19) + 19;
        $scope.chartData.push({x:time,y:rand});  

    $timeout(addPoint, 1000);}

    addPoint();


   
    
  });
