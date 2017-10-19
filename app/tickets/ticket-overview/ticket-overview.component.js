'use strict';

angular
  .module('tickets')
  .component('ticketOverview', {
    templateUrl: 'tickets/ticket-overview/ticket-overview.template.html',
    controller: ['userService', function (userService) {
        this.currentUserName = userService.currentUser();
        this._companies = [
          {id: 1, title: 'Need help with UI', submittedBy: 'Mary', company: 'ABC Corp'},
          {id: 2, title: 'Submit not working', submittedBy: 'Ned', company: 'Priority Gems'},
          {id: 3, title: 'How do I upload files?', submittedBy: 'Bob', company: 'ABC Corp'},
          {
            id: 4,
            title: 'Schedule a video call for training',
            submittedBy: 'Mary',
            company: 'ABC Corp'
          },
          {id: 5, title: 'Minor issue with layout', submittedBy: 'Jules', company: 'Priority Gems'}
        ];
        this.tickets = this._companies;

        this.onFilterChanged = function (filter) {
          this.tickets = this._companies.filter(function (t) {
            return filter === '' || t.submittedBy === filter;
          });
        }
      }
    ]
  });