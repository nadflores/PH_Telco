(function() {
  'use strict';

  angular
    .module('phTelcomSearch')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
