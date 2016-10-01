/**
 * Created by raviteja on 7/10/2016.
 */
'use strict';
(function() {
    var app = angular.module('app.components', []);

    angular.
        module('app.components',[])
        .component('todoTaskBox', {
            templateUrl: 'partials/taskBox.html',
            controller: TaskController,
            controllerAs: 'tc',
            bindings: {
                tasks: '=',
                deleteTask: '&'
            }
        });

    function TaskController() {
        var tc = this;
    }
})();