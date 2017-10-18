'use strict';

angular
  .module('tickets')
  .component('ticketList', {
    templateUrl: 'tickets/ticket-list/ticket-list.template.html',
    bindings: {
      tuskTickets: '<',
      onFilterChange: '&'
    },
    controller: function () {
        this.notifyList = [];

        this.onNotifyAll = function () {
          this.notifyList = this.tuskTickets.map(function (t) {
            return t.id;
          });
        };

        this.onSubmittedBySelected = function (submittedBy) {
          this.onFilterChange({filter: submittedBy});
        };
      }

  });