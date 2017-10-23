'use strict';

angular
  .module('tuskDeskApp')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/tickets', {
          template: '<ticket-overview></ticket-overview>'
        })
        .when('/companies', {
          template: '<company-overview></company-overview>'
        })
        .otherwise('/tickets');
      $locationProvider.html5Mode(true);
    }
  ]);
