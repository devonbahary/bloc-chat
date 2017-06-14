(function() {
  function NewRoomCtrl($uibModalInstance, Room) {

    /*
     * @func closeModal
     * @desc Closes the modal
    */
    this.closeModal = function() {
      $uibModalInstance.close();
    };

    /*
     * @func createRoom
     * @desc Creates a new room object and adds it to the 'Room.all' database
    */
    this.createRoom = function(roomName) {
      var newRoom = { "$value": roomName };
      Room.add(newRoom);
      this.closeModal();
    }
  }

  angular
    .module('blocChat')
    .controller('NewRoomCtrl', ['$uibModalInstance', 'Room', NewRoomCtrl]);
})();
