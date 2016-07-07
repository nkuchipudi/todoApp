'use strict';
(function(){
// Declare app level module which depends on views, and components
    angular.
    module('todoApp').
    config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider', configuration]);

    function configuration($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

        // For any unmatched url, redirect to /state1

        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "todo/dashboard/dashboard.html",
            controller: 'DashboardController',
            controllerAs:'dc'
        });
        $urlRouterProvider.otherwise("/dashboard");

        $translateProvider.useStaticFilesLoader({
            prefix: 'messages-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        //$locationProvider.html5Mode(true);
    }
}());
