(function() {
  'use strict';

  angular
    .module('phTelcomSearch')
    .controller('TelcoController', TelcoController);

  /** @ngInject */
  function TelcoController($log, TelcoService) {
    var vm = this;
    
    vm.emptyResult = emptyResult;
    vm.klass = klass;
    vm.prefixName = null;
    vm.search = search;

    function klass(prefixName){
      switch (prefixName){
        case "N/A":
          return "text-warning";
        case "Invalid Prefix":
          return "text-danger";
        default:
          return "text-success";
      }
    }

    function emptyResult(){
      vm.prefixName = null;
    }

    function search(prefix){
      vm.prefixName = TelcoService.search(prefix);
    }
  }
})();
