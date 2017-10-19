'use strict';

angular
  .module('companies')
  .component('companyCard', {
    templateUrl: 'assets/companies/company-card/company-card.template.html',
    bindings: {
      tuskCompany: '<',
      notifyList: '=',
      onGroupSelect: '&'
    },
    controller: ['teamService', function (teamService) {
      this.$onChanges = function () {
        this.teamAssignedToCompany = teamService.teamAssignedToCompany(this.tuskCompany.name);
      };

      this.onNotifyToggle = function () {
        if (this.notifyList.indexOf(this.tuskCompany.id) >= 0) {
          this.notifyList.splice(this.notifyList.indexOf(this.tuskCompany.id), 1);
        } else {
          this.notifyList.push(this.tuskCompany.id);
        }
      };
    }]
  });
