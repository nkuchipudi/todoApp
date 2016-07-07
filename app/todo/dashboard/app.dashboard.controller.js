/**
 * Created by raviteja on 7/3/2016.
 */
(function(){
    angular.
        module('app.dashboard')
        .controller('DashboardController',DashboardController);

    DashboardController.$inject=['DashboardService','$rootScope','filterFilter'];

    function DashboardController(DashboardService,$rootScope,filterFilter){
        var dc = this;
        dc.tasks = [];
        dc.selectedStatus = {};
        dc.loadTasks = loadTasks;
        dc.filterTasks = filterTasks;
        dc.statuses = [
            {name:"Opened",value:"OPENED"},
            {name:"Invalid",value:"INVALID"}
        ];
        loadTasks();

        function filterTasks() {
            dc.tasks = DashboardService.filterTasks($rootScope.TASKS, dc.selectedStatus.value.value, undefined);
        }

        function loadTasks() {
            DashboardService.getTasks().then(function (response){
                $rootScope.TASKS = response.data;
                dc.tasks = response.data;
            },function (errResponse){
                console.log("Something gone wrong while loading tasks"+errResponse);
            });
        }
    }
}());