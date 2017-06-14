(function() {
  function Message($firebaseArray) {
    var Message = {};

    /*
     * @desc A reference to the Firebase data 'messages'
    */
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    /*
     * @func getByRoomId
     * @desc Returns messages selected from 'roomId'
     * @param {String}
     * @return {Object}
    */
    Message.getByRoomId = function(roomId) {
      var query = ref.orderByChild('roomId').equalTo(roomId);
      return $firebaseArray(query);
    };

    /*
     * @func send
     * @desc Submits 'message' object to the Firebase server
     * @param {Object}
    */
    Message.send = function(message) {

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
