'use strict';

angular
  .module('companies')
  .component('companyOverview', {
    templateUrl: 'companies/company-overview/company-overview.template.html',
    controller: ['teamService', function (teamService) {
      this.currentTeamName = teamService.currentTeam();

      this._companies = [
        {id: 1, name: 'ABC Corp', group: 'tier 1'},
        {id: 2, name: 'Priority Gems', group: 'tier 1'},
        {id: 3, name: 'Disco Distro', group: 'tier 2'},
        {id: 4, name: 'Nestabout', group: 'tier 3'},
        {id: 5, name: 'Water Parcel LLC', group: 'tier 1'}
      ];
      this.companies = this._companies;

      this.onFilterChanged = function (filter) {
        this.companies = this._companies.filter(function (t) {
          return filter === '' || t.group === filter;
        });
      }
    }]
  });
