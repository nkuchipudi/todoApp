/**
 * Created by raviteja on 7/3/2016.
 */
(function(){
    angular.
        module('app.dashboard')
        .controller('DashboardController',DashboardController);

    DashboardController.$inject=[];

    function DashboardController(){
        var dc = this;
        dc.test = "something";

    }
}());