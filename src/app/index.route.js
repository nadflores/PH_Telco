(function() {
  'use strict';

  angular
    .module('phTelcomSearch')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('telco', {
        url: '/',
        templateUrl: 'app/telco/telco.html',
        controller: 'TelcoController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
