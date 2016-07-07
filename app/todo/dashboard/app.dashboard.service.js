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

            var filteredTasks = tasks;
            if(selectedStatus) {
                filteredTasks = filterFilter(filteredTasks,selectedStatus);
            }
            if(selectedPriorities.length) {
                var priorities=[];
                angular.forEach(selectedPriorities, function (val, ind){
                    priorities.push(val.value);
                });
                filteredTasks = filterFilter(filteredTasks,function (value, index , filteredTasks) {
                   return priorities.indexOf(value.priority) >= 0;
                });
            }
            return filteredTasks;
        }
    }
}());