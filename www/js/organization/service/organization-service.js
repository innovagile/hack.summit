(function () {
    'use strict';

    angular
        .module('charityApp')
        .service('OrganizationService', OrganizationService);

    OrganizationService.$inject = ['OrganizationFactory', '$q'];

    function OrganizationService(OrganizationFactory, $q) {

        var self = this;

        self.getOrganizations = function () {
            return OrganizationFactory.organizations
        };

        self.getOrganization = function (id) {
            return OrganizationFactory.organizations[id];
        };

        return self;
    }


}());