(function () {
    'use strict';

    angular
        .module('charityApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'localStorageService'];

    function LoginCtrl($scope, $state, localStorageService) {

        var vm = this;

        vm.login = function (e, user) {
            e.preventDefault();
            localStorageService.set('logged', user);
            $state.go('dashboard');
        };
        vm.logout = function (user) {
            localStorageService.remove('logged');
            $state.go('login');
        };

        vm.getCurrentUser = function () {
            return localStorageService.get('logged');
        }

    }

}());