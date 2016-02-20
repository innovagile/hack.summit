(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'NgMap'];

    function DashboardCtrl($scope, NgMap) {

        var dashboard = this;
        dashboard.breadcrumb = "Dashboard";

        NgMap.getMap().then(function (map) {
            dashboard.showCustomMarker = function (evt) {
                map.customMarkers.foo.setVisible(true);
                map.customMarkers.foo.setPosition(this.getPosition());
            };
            dashboard.closeCustomMarker = function (evt) {
                this.style.display = 'none';
            };
        });


    }


}());