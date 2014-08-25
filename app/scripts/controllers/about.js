'use strict';

/**
 * @ngdoc function
 * @name ngDirectivesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngDirectivesApp
 */
angular.module('ngDirectivesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.who = "Coding Dojo";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
