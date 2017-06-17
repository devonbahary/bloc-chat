(function() {
  function HomeCtrl($scope, Room, Message, $uibModal, $cookies) {
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
      if (minutes < 10) {
        timeString += '0';
      }
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
     * @func newRoom
     * @desc Opens up a modal for new room creation
    */
    $scope.newRoom = function() {
      $uibModal.open({
        ariaLabeledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/newRoom.html',
        controller: 'NewRoomCtrl',
        controllerAs: 'modal',
        size: 'sm'
      });
    };

    /*
     * @func sendMessage
     * @desc Takes in the 'messageContent' string and builds a Message object
     * to send to the Message service
     * @param {String}
    */
    $scope.sendMessage = function(messageContent) {
      if ($scope.activeRoom) {
        var message = {};
        message.content = messageContent;
        message.roomId = $scope.activeRoom.$id;
        message.sentAt = getTime();
        message.username = $cookies.get('blocChatCurrentUser');
        Message.send(message);
      }
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
