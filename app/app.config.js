'use strict';
(function(){
// Declare app level module which depends on views, and components
    angular.
    module('todoApp').
    config(['$stateProvider', '$urlRouterProvider', configuration]);

    function configuration($stateProvider, $urlRouterProvider) {
        //$locationProvider.hashPrefix('!');
        //$routeProvider.otherwise({redirectTo: '/view1'});

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "todo/dashboard/dashboard.html",
            controller: 'DashboardController',
            controllerAs:'dc'
        })
    }
}());
