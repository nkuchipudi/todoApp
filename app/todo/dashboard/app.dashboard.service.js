/**
 * Created by raviteja on 7/3/2016.
 */
(function(){
    angular.
        module('app.dashboard')
        .service('DashboardService',DashboardService);

    DashboardService.$inject = ['$http', '$q', '$filter', 'filterFilter'];

    function DashboardService($http, $q, $filter, filterFilter) {
        var service = {
            getTasks:getTasks,
            filterTasks:filterTasks
        };
        return service;

        function getTasks() {
            var deferred = $q.defer();
            $http.get('tasks.json').
            then(function(response) {
                return deferred.resolve(response);
            }, function(response) {
                console.log("error");
                return deferred.reject("Something gone wrong");
            });
            return deferred.promise;
        }

        function filterTasks(tasks, selectedStatus, selectedPriorities) {
            var filteredTasks = [];
            if(selectedStatus) {
                filteredTasks = filterFilter(tasks,selectedStatus);
            }
            return filteredTasks;
        }
    }
}());