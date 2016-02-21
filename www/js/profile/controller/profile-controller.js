(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$scope'];

    function ProfileCtrl($scope) {

        var profile = this;
        profile.breadcrumb = "Profile";



    }


}());