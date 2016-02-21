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