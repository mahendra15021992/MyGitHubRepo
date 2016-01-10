'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Softwares',
  function($scope, Softwares) {
    $scope.softwares = Softwares.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Software',
  function($scope, $routeParams, Software) {
    $scope.software = Software.get({softwareId: $routeParams.softwareId}, function(software) {
      $scope.mainImageUrl = software.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);