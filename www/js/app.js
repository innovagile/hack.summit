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
            .state('/', {
                url: '/',
                templateUrl: 'js/controllers/main/main.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            });
    });

}());