(function () {
    'use strict';

    angular
        .module('charityApp')
        .factory('DashboardFactory', DashboardFactory);

    DashboardFactory.$inject = ['$http'];

    function DashboardFactory($http) {

        var self = this;

        self.organizations = [
            {id: 1, name: "Unicef", description: "World biggest charity organization...", lat: 52.40, long: 16.90},
            {id: 2, name: "Unicef2", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 3, name: "Unicef3", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 4, name: "Unicef4", description: "World biggest charity organization...",  lat: 52.40, long: 16.90}
        ];

        return self;


    }

}());