(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('ShowOrganizationCtrl', ShowOrganizationCtrl);

    ShowOrganizationCtrl.$inject = ['$scope', 'NgMap', '$stateParams', 'OrganizationService'];

    function ShowOrganizationCtrl($scope, NgMap, $stateParams, OrganizationService) {

        var organization = this;
        organization.breadcrumb = "Organization details";

        organization.id = $stateParams.id;

        organization.details = OrganizationService.getOrganization(organization.id);



    }


}());