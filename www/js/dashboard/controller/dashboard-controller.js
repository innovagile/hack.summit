(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'NgMap', 'OrganizationService', 'OrganizationFactory', 'localStorageService'];

    function DashboardCtrl($scope, NgMap, OrganizationService, OrganizationFactory, localStorageService) {
        localStorageService.set('logged', 'John Doe');
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
            //dashboard.showCustomMarker(position);
        };

        dashboard.mapPoints = OrganizationService.getMapPoints();

        dashboard.lat = 52.41;
        dashboard.long = 16.91;

        dashboard.selected = {};
        NgMap.getMap().then(function (map) {
            dashboard.showCustomMarker = function (evt, point) {
                angular.copy(point, dashboard.selected);
                dashboard.selected.index = getOrganizationIndex(point.id);
                map.customMarkers.foo.setVisible(true);
                map.customMarkers.foo.setPosition(this.getPosition());
            };
            dashboard.closeCustomMarker = function (evt) {
                this.style.display = 'none';
            };
        });

        function getOrganizationIndex(id) {
            var idx = null;
            angular.forEach(OrganizationFactory.organizations, function (o, key) {
                if (o.id == id) {
                    idx = key;
                }
            });

            return idx;
        }
    }


}());