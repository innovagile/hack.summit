(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'NgMap', 'OrganizationService'];

    function DashboardCtrl($scope, NgMap, OrganizationService) {

        var dashboard = this;
        dashboard.breadcrumb = "Dashboard";

        dashboard.organizations = OrganizationService.getOrganizations();
        dashboard.center = function (lat, long) {
            dashboard.lat = lat;
            dashboard.long = long;
            var position = {
                position: {
                    0: lat,
                    1: long
                }
            };
            dashboard.showCustomMarker(position);
            console.log(lat, long);
        };

        dashboard.mapPoints = OrganizationService.getMapPoints();

        dashboard.lat = 52.41;
        dashboard.long = 16.91;

        dashboard.selected = {};
        NgMap.getMap().then(function (map) {
            dashboard.showCustomMarker = function (evt, point) {
                console.log(evt);
                angular.copy(point, dashboard.selected);
                map.customMarkers.foo.setVisible(true);
                map.customMarkers.foo.setPosition(this.getPosition());
            };
            dashboard.closeCustomMarker = function (evt) {
                this.style.display = 'none';
            };
        });

    }


}());