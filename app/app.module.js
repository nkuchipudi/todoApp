'use strict';
(function(){
// Declare app level module which depends on views, and components
  angular.module('todoApp', [
    'ui.router',
    'pascalprecht.translate',
    'ui.select',
    'ngSanitize',
    'ui.bootstrap',
    'app.filters',
    'app.components',
    'app.dashboard'
  ]);
}());
