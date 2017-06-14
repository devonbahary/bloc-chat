(function (){
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }

  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        ariaLabeledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/username.html',
        controller: 'UsernameCtrl',
        controllerAs: 'modal',

        backdrop: 'static', // prevents modal from closing from clicking on
        keyboard: false,    // backdrop or by 'ESC' key

        size: 'sm',
      });
    }
  }

  angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
    .config(config)
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
