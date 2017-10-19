'use strict';

angular
  .module('companies')
  .component('companyList', {
    templateUrl: 'assets/companies/company-list/company-list.template.html',
    bindings: {
      tuskCompanies: '<',
      onFilterChange: '&'
    },
    controller: function () {
      this.notifyList = [];

      this.onNotifyAll = function () {
        this.notifyList = this.tuskCompanies.map(function (t) {
          return t.id;
        });
      };

      this.onGroupSelected = function (groupName) {
        this.onFilterChange({filter: groupName});
      };
    }
  });
