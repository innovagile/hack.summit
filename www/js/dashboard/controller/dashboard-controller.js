(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'NgMap', 'DashboardFactory'];

    function DashboardCtrl($scope, NgMap, DashboardFactory) {

        var dashboard = this;
        dashboard.breadcrumb = "Dashboard";
        dashboard.organizations = DashboardFactory.organizations;

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