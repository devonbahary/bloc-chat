(function() {
  function ModalCtrl($uibModalInstance, Room) {

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
    this.createRoom = function() {
      var newRoom = {};
      var roomNumber = Room.all.length + 1;
      newRoom["room" + roomNumber] = "room" + roomNumber;
      Room.add(newRoom);
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
