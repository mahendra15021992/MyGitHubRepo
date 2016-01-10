'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/softwares', {
        templateUrl: 'partialsSoftware/software-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/softwares/:softwareId', {
        templateUrl: 'partialsSoftware/soft-details.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/softwares'
      });
  }]);
