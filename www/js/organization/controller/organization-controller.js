(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('OrganizationCtrl', OrganizationCtrl);

    OrganizationCtrl.$inject = ['$scope', 'NgMap', '$stateParams', '$state'];

    function OrganizationCtrl($scope, NgMap, $stateParams, $state) {

        var organization = this;
        organization.breadcrumb = "Organization";

        var vm = this;

        vm.placeChanged = function() {
            vm.place = this.getPlace();
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
                lat: data.data.location.lat(),
                long: data.data.location.lng()
            });
        }
    }


}());