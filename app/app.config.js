'use strict';

angular
  .module('tuskDeskApp')
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/tickets', {
          template: '<ticket-overview></ticket-overview>'
        })
        .when('/companies', {
          template: '<company-overview></company-overview>'
        })
        .otherwise('/tickets');
    }
  ]);
