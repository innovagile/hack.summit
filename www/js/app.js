(function () {
    'use strict';

    var charityApp = angular
        .module("charityApp", [
            'ui.router',
            'ngMap'
        ]);

    charityApp.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'js/dashboard/partials/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'js/common/partials/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'js/common/partials/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .state('organizationCreate', {
                url: '/organization/create',
                templateUrl: 'js/organization/partials/create.html',
                controller: 'OrganizationCtrl',
                controllerAs: 'organization'
            })
            .state('organizationDetails', {
                url: '/organization/:id',
                templateUrl: 'js/organization/partials/show.html',
                controller: 'ShowOrganizationCtrl',
                controllerAs: 'organization'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'js/profile/partials/show.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile'
            });
    });

}());