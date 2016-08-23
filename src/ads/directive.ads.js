(function(angular){
  angular
    .module('ads')
    .directive('ads', directive);

  function directive() {
    var directive = {
      controller : 'adsController',
      templateUrl : 'ads/ads.html',
      controllerAs : 'ctrl',
      bindToCntroller : true
    };
    return directive;
  }
})(angular);
