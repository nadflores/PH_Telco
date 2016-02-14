(function() {
  'use strict';

  angular
    .module('phTelcomSearch')
    .factory('TelcoService', TelcoService);

  /** @ngInject */
  function TelcoService() {
    var PREFIX_LIST = {
      smart_tnt: [
        "813",
        "907",
        "908",
        "909",
        "910",
        "911",
        "912",
        "913",
        "914",
        "918",
        "919",
        "920",
        "921",
        "928",
        "929",
        "930",
        "938",
        "939",
        "946",
        "947",
        "948",
        "949",
        "950",
        "989",
        "998",
        "999",
      ],
      globe_tm: [
        "817",
        "905",
        "906",
        "915",
        "916",
        "917",
        "926",
        "927",
        "935",
        "936",
        "945",
        "975",
        "994",
        "995",
        "996",
        "997",
      ],
      sun: [
        "922",
        "923",
        "924",
        "925",
        "931",
        "932",
        "933",
        "934",
        "942",
        "943",
      ]
    }

    return {
      search: search
    };

    ////////////

    function search(prefix){
      var validPrefix = cleanup(prefix);
      if(!validPrefix){ return "Invalid Prefix";}
      if($.inArray(validPrefix, PREFIX_LIST.smart_tnt) >= 0){ return 'SMART / TNT'}
      else if($.inArray(validPrefix, PREFIX_LIST.globe_tm) >= 0){ return 'GLOBE / TM'}
      else if($.inArray(validPrefix, PREFIX_LIST.sun) >= 0){ return 'SUN'}
      else {return 'N/A'}
      
    }

    function cleanup(prefix){
      var reg = /^\d+$/;
      if(reg.test(prefix)){
        if(prefix[0] === "0"){
          return prefix.slice(1, 4);
        }
        else {
          return prefix.slice(0, 3);
        }
      }
      else{
        return false;
      }
    }
  }
})();
