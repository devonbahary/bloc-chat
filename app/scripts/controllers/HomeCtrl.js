(function() {
  function HomeCtrl($scope, Room, Message, $uibModal) {
    /*
     * @desc The $firebaseArray Rooms database from the 'Room' service
     * @type {Object}
    */
    $scope.rooms = Room.all;

    /*
     * @desc Active room (viewed in the messages window)
     * @type {null} or {Object}
    */
    $scope.activeRoom = null;

    /*
     * @desc Active room messages
     * @type {null} or {Object}
    */
    $scope.roomMessages = null;

    /*
     * @func activateRoom
     * @desc Changes the active room to the room passed as an argument
     * @param {Object}
    */
    $scope.activateRoom = function(room) {
      $scope.activeRoom = room;
      $scope.roomMessages = Message.getByRoomId(room.$id);
    }

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
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
