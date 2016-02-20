(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'NgMap'];

    function DashboardCtrl($scope, NgMap) {

        var dashboard = this;
        console.log("it works");
        NgMap.getMap().then(function (map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });

        dashboard.breadcrumb = "Dashboard";

    }


}());