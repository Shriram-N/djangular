angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'retail',
        url: '/',
        templateUrl: 'public/components/retail/templates/retail.html',
        controller: 'RetailController'
    });

    $urlRouterProvider.otherwise('/');
}]);
console.log('in routes');
