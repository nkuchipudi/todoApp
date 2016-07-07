/**
 * Created by raviteja on 7/3/2016.
 */
(function(){
    angular.
        module('app.dashboard')
        .controller('DashboardController',DashboardController);

    DashboardController.$inject=['DashboardService','$rootScope','filterFilter','$scope'];

    function DashboardController(DashboardService,$rootScope,filterFilter, $scope){
        var dc = this;
        dc.tasks = [];
        dc.selectedStatus = {};
        dc.selectedPriorities = [];
        dc.loadTasks = loadTasks;
        dc.filterTasks = filterTasks;
        dc.clear = clear;
        dc.statuses = [
            {name:"Opened",value:"OPENED"},
            {name:"Invalid",value:"INVALID"},
            {name:"Completed",value:"COMPLETED"},
            {name:"Inprogress",value:"INPROGRESS"}
        ];
        dc.priorities = [
            {name:"Low",value:"LOW"},
            {name:"Medium",value:"MEDIUM"},
            {name:"High",value:"HIGH"}
        ];
        loadTasks();

        function filterTasks() {
            dc.tasks = DashboardService.filterTasks($rootScope.TASKS, dc.selectedStatus.value? dc.selectedStatus.value.value: undefined,
                dc.selectedPriorities);
        }

        $scope.$watch('dc.selectedStatus.value', function(newValue, oldValue) {
            filterTasks();
        });

        function clear() {
            dc.selectedStatus = undefined;
            filterTasks();
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