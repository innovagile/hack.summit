(function () {
    'use strict';

    angular
        .module('charityApp')
        .factory('OrganizationFactory', OrganizationFactory);

    OrganizationFactory.$inject = ['$http'];

    function OrganizationFactory($http) {

        var self = this;

        self.organizations = [
            {id: 1, name: "Unicef", description: "World biggest charity organization...", lat: 52.40, long: 16.90},
            {id: 2, name: "AARP Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 3, name: "Acorns Childrens Hospice", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 4, name: "Action Against Hunger", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 5, name: "ActionAid", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 6, name: "Acumen", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 7, name: "Adelson Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 8, name: "Adventist Development and Relief Agency", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 9, name: "Aerospace Heritage Foundation of Canada", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 10, name: "Feeding America", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 11, name: "FINCA International", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 12, name: "Food Allergy Initiative", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 13, name: "Ford Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 14, name: "The Foundation for a Better Life", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 15, name: "Foundation for Child Development", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 16, name: "The Fred Hollows Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 17, name: "Free the Children", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 18, name: "Fremont Area Community Foundation", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 19, name: "Friedrich Ebert Stiftung", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 20, name: "Fritt Ord", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 21, name: "Fund for Reconciliation and Development", description: "World biggest charity organization...",  lat: 52.40, long: 16.90},
            {id: 22, name: "Fundacion Manantiales", description: "World biggest charity organization...",  lat: 52.40, long: 16.90}

    ];

        return self;


    }

}());