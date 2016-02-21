(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('OrganizationCtrl', OrganizationCtrl);

    OrganizationCtrl.$inject = ['$scope', 'NgMap', '$stateParams', '$state'];

    function OrganizationCtrl($scope, NgMap, $stateParams, $state) {

        var organization = this;
        organization.breadcrumb = "Organization";

    }


}());