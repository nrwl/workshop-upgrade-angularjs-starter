'use strict';

angular
  .module('tuskDeskApp')
  .component('siteHeader', {
    template: `
      <header class="site-header">
        <h1>TuskDesk Ticket System</h1>
        <nav>
          <a href="#!/tickets">Tickets</a>
          <a href="#!/companies">Companies</a>
        </nav>
      </header>
    `,
    controller: function () {}
  });