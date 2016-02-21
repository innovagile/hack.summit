(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('ShowOrganizationCtrl', ShowOrganizationCtrl);

    ShowOrganizationCtrl.$inject = ['$scope', 'NgMap', '$stateParams', 'OrganizationService', 'localStorageService'];

    function ShowOrganizationCtrl($scope, NgMap, $stateParams, OrganizationService, localStorageService) {

        var organization = this;
        organization.breadcrumb = "Organization details";

        organization.id = $stateParams.id;

        organization.details = OrganizationService.getOrganization(organization.id);

        organization.joined = [
            {
                name: 'John doe',
                photo: 'img/user1-128x128.jpg'
            },
            {
                name: 'Jan Kowalski',
                photo: 'img/user5-128x128.jpg'
            },
            {
                name: 'Adam Nowak',
                photo: 'img/user3-128x128.jpg'
            }
        ];

        organization.join = function () {
            var user = localStorageService.get('logged');
            organization.joined.push({
                name: user,
                photo: 'img/user4-128x128.jpg'
            });
        }
    }


}());