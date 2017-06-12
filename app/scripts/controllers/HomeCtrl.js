(function() {
  function HomeCtrl($scope, Room, $uibModal) {
    /*
     * @desc The $firebaseArray Rooms database from the 'Room' service
     * @type {Object}
    */
    $scope.rooms = Room.all;

    /*
     * @func openModal
     * @desc Opens up a modal for new room creation
    */
    $scope.openModal = function() {
      var modal = $uibModal.open({
        ariaLabeledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'sm'
      });
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();
