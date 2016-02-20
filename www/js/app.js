(function () {
    'use strict';

    var charityApp = angular
        .module("charityApp", [
            'ui.router',
            'ngMap'
        ]);

    var config = charityApp.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'js/dashboard/partials/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            })
            .state('/organization', {
                url: '/organization',
                templateUrl: 'js/organization/partials/index.html',
                controller: 'OrganizationCtrl',
                controllerAs: 'organization'
            });
    });

}());