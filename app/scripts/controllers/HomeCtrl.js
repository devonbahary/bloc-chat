(function() {
  function HomeCtrl($scope, Room, Message, $uibModal) {
    /*
     * @func getTime
     * @desc Returns a string of the current time
    */
    var getTime = function() {
      var timeString = '';
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var pmFlag = false;
      if (hours > 12) {
        hours -= 12;
        pmFlag = true;
      }
      timeString += hours + ':';
      timeString += minutes;
      pmFlag ? timeString += 'pm' : timeString += 'am';
      return timeString;
    }

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
      modal = $uibModal.open({
        ariaLabeledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/newRoom.html',
        controller: 'NewRoomCtrl',
        controllerAs: 'modal',
        size: 'sm'
      });
    };

    $scope.sendMessage = function(messageContent) {
      if ($scope.activeRoom) {
        /*
        var message = {};
        message.content = messageContent;
        message.roomId = $scope.activeRoom;
        message.sentAt = getTime();
        message.username = $cookies.get('blocChatCurrentUser');
        alert(message);
        // Message.send(message);*/
      }
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
