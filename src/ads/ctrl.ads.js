(function(angular){
  angular
    .module('ads')
    .controller('adsController', AdsController);

  AdsController.$inject = ['$scope','adsService'];
  function AdsController($scope, adsService) {
    var vm = this;

    vm.model = adsService;

    return vm;
  }
})(angular);
