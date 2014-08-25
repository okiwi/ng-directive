'use strict';

/**
 * @ngdoc function
 * @name ngDirectivesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngDirectivesApp
 */
angular.module('ngDirectivesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
