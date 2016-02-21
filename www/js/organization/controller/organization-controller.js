(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('OrganizationCtrl', OrganizationCtrl);

    OrganizationCtrl.$inject = ['$scope', 'NgMap', '$stateParams', '$state', 'OrganizationFactory'];

    function OrganizationCtrl($scope, NgMap, $stateParams, $state, OrganizationFactory) {

        var organization = this;
        organization.breadcrumb = "Organization";

        var vm = this;

        vm.placeChanged = function() {
            vm.place = this.getPlace();
            organization.new = [];
            organization.new.location = vm.place.geometry.location;
            vm.map.setCenter(vm.place.geometry.location);
        };
        NgMap.getMap().then(function(map) {
            vm.map = map;
        });

        vm.send = function(data) {
            OrganizationFactory.send({
                name: data.name,
                desc: data.desc,
                lat: data.location.lat(),
                lon: data.location.lng()
            });
        }
    }


}());