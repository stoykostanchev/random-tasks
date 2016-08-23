(function(angular) {
  angular
    .module('ads', [
      'language'
    ])
    .run( globalizeLangService);

  globalizeLangService.$inject = ['$rootScope', 'langService'] 
  function globalizeLangService($rootScope, langService) {
    $rootScope.langService = langService;
  }
})(angular);
