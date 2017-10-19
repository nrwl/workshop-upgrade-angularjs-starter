'use strict';

angular
  .module('tickets')
  .component('ticketCard', {
    templateUrl: 'assets/tickets/ticket-card/ticket-card.template.html',
    bindings: {
      tuskTicket: '<',
      notifyList: '=',
      onSubmittedBySelect: '&'
    },
    controller: ['userService', function (userService) {
        this.$onChanges = function () {
          this.userAssignedToCompany = userService.userAssignedToCompany(this.tuskTicket.company);
        };

        this.onNotifyToggle = function () {
          if (this.notifyList.indexOf(this.tuskTicket.id) >= 0) {
            this.notifyList.splice(this.notifyList.indexOf(this.tuskTicket.id), 1);
          } else {
            this.notifyList.push(this.tuskTicket.id);
          }
        };
      }
    ]
  });
