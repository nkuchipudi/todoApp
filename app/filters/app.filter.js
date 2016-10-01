/**
 * Created by raviteja on 7/10/2016.
 */
'use strict';

(function() {
    var app = angular.module('app.filters', []);

    //coverts the input to upper case
    app.filter('titleCase', function () {
        return function (input) {
            return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        };
    });
})();