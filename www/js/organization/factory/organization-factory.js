(function () {
    'use strict';

    angular
        .module('charityApp')
        .factory('OrganizationFactory', OrganizationFactory);

    OrganizationFactory.$inject = ['$http'];

    function OrganizationFactory($http) {

        var self = this;

        $http.get('/api/v1/organization', {cache: true}).then(function (response) {
            self.organizations = [];
            angular.copy(response.data.results, self.organizations);
            console.log(self.organizations);
        });

        self.send = function(data) {
            $http.post('/api/v1/organization', data).then(function (response) {
                console.log(response.data);
            });
        };

        return self;

    }

}());
