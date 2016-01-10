'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Software', ['$resource',
  function($resource){
    return $resource('softwares/:softId.json', {}, {
      query: {method:'GET', params:{softId:'softwares'}, isArray:true}
    });
  }]);
