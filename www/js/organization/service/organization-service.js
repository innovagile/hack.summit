(function () {
    'use strict';

    angular
        .module('charityApp')
        .service('OrganizationService', OrganizationService);

    OrganizationService.$inject = ['OrganizationFactory'];

    function OrganizationService(OrganizationFactory) {

        var self = this;

        self.points = [];

        self.getOrganizations = function () {
            return OrganizationFactory.organizations
        };

        self.getOrganization = function (id) {
            return OrganizationFactory.organizations[id];
        };

        self.getMapPoints = function () {
            angular.forEach(OrganizationFactory.organizations, (points) => {
                self.points.push({
                    position: [
                        points.lat,
                        points.long
                    ],
                    name: points.name,
                    description: points.description,
                    id: points.id
                });

            });

            return self.points;
        };
    }

}());