(function () {
    'use strict';

    angular
        .module('charityApp')
        .factory('OrganizationFactory', OrganizationFactory);

    OrganizationFactory.$inject = ['$http'];

    function OrganizationFactory($http) {

        var self = this;

        $http.get('api/v1/organization', {cache: true}).then(function (response) {
            angular.copy(response.data.results, self.organizations);
        });

        self.organizations =  [
                {id: 1, name: "Unicef", description: "World biggest charity organization...", lat: 52.41, long: 16.90},
                {id: 2, name: "AARP Foundation", description: "World biggest charity organization...",  lat: 52.4111, long: 16.90},
                {id: 3, name: "Acorns Childrens Hospice", description: "World biggest charity organization...",  lat: 52.41133, long: 16.90},
                {id: 4, name: "Action Against Hunger", description: "World biggest charity organization...",  lat: 52.4123, long: 16.90},
                {id: 5, name: "ActionAid", description: "World biggest charity organization...",  lat: 52.4025, long: 16.90},
                {id: 6, name: "Acumen", description: "World biggest charity organization...",  lat: 52.4074, long: 16.9123},
                {id: 7, name: "Adelson Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.911},
                {id: 8, name: "Adventist Development and Relief Agency", description: "World biggest charity organization...",  lat: 52.40, long: 16.9220},
                {id: 9, name: "Aerospace Heritage Foundation of Canada", description: "World biggest charity organization...",  lat: 52.40, long: 16.91230},
                {id: 10, name: "Feeding America", description: "World biggest charity organization...",  lat: 52.3932, long: 16.93453},
                {id: 11, name: "FINCA International", description: "World biggest charity organization...",  lat: 52.4220, long: 16.912312},
                {id: 12, name: "Food Allergy Initiative", description: "World biggest charity organization...",  lat: 52.4123, long: 16.92312},
                {id: 13, name: "Ford Foundation", description: "World biggest charity organization...",  lat: 52.433, long: 16.90},
                {id: 14, name: "The Foundation for a Better Life", description: "World biggest charity organization...",  lat: 52.456, long: 16.954623},
                {id: 15, name: "Foundation for Child Development", description: "World biggest charity organization...",  lat: 52.41245, long: 16.89234234},
                {id: 16, name: "The Fred Hollows Foundation", description: "World biggest charity organization...",  lat: 52.410, long: 16.88234},
                {id: 17, name: "Free the Children", description: "World biggest charity organization...",  lat: 52.430, long: 16.1953},
                {id: 18, name: "Fremont Area Community Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.123408},
                {id: 19, name: "Friedrich Ebert Stiftung", description: "World biggest charity organization...",  lat: 52.470, long: 16.2304},
                {id: 20, name: "Fritt Ord", description: "World biggest charity organization...",  lat: 52.4035, long: 16.74},
                {id: 21, name: "Fund for Reconciliation and Development", description: "World biggest charity organization...",  lat: 52.40, long: 16.321},
                {id: 22, name: "Fundacion Manantiales", description: "World biggest charity organization...",  lat: 52.3411, long: 16.90}

        ];

        self.send = function(data) {
            $http.post('api/v1/organization', data).then(function (response) {
                console.log(response.data);
            });
        };

        return self;

    }

}());