var charityApp = angular.module( "charityApp" , ['ui.router'] );

charityApp.config( function ( $stateProvider , $urlRouterProvider ) {

    $urlRouterProvider.otherwise( '/' );

    $stateProvider
        .state( '/' , {
            url: '/' ,
            templateUrl: 'js/controllers/main/main.html'
        } );
} );