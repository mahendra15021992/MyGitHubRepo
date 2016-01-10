'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Softwares', ['$resource',
  function($resource){
    return $resource('softwares/:softwareId.json', {}, {
      query: {method:'GET', params:{softwareId:'softwares'}, isArray:true}
    });
  }]);
