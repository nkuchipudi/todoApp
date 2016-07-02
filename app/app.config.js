'use strict';
(function(){
// Declare app level module which depends on views, and components
  angular.
  module('todoApp').
  config(['$locationProvider', '$routeProvider', configuration]);

  function configuration($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
  }
}());
