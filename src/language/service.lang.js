(function(angular){
  function langService() {
    var service = this;

    service.lang = null;
    service.translMap = {
      'language_select_label' : {
        'en' : 'LANGUAGE',
        'de' : 'SPRACHE'
      },
      'language_select_empty' : {
        'en' : 'Select your language',
        'de' : 'Sprache Wählen'
      }
    };
    service.languages = [
      { name : 'English', short_name : 'en' },
      { name : 'German' , short_name : 'de' }
    ];
    service.getCurLang = getCurLang;
    service.getTranslation = getTranslation;
    service.getTranslation = getTranslation;

    return service;

    function getTranslation(place) {
      return (this.translMap[place] || {} )[this.getCurLang()];
    }
    function getCurLang(){
      return (this.lang && this.lang.short_name) || 'en';
    }
  }

  angular
    .module('language')
    .service('langService', langService);
})(angular);
