'use strict';

angular
  .module('tuskDeskApp')
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.when('/tickets', {
        template: '<ticket-overview></ticket-overview>'
      }).otherwise('/tickets');
    }
  ]);
