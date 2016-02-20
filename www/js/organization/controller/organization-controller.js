(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('OrganizationCtrl', OrganizationCtrl);

    OrganizationCtrl.$inject = ['$scope', 'NgMap'];

    function OrganizationCtrl($scope, NgMap) {

        var organization = this;
        organization.breadcrumb = "Organization";

    }


}());