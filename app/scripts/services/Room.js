(function() {
  function Room($firebaseArray) {
    /*
     * @desc Our return object, holding all of our factory service's properties
     * and methods.
     * type {Object}
    */
    var Room = {};

    /*
     * @desc A reference to our Firebase database 'Rooms'
     * @type {Object}
    */
    var ref = firebase.database().ref().child("rooms");

    /*
     * @desc Our 'ref' object from above with new '$firebaseArray' properties
     * and methods.
     * @type {Object}
    */
    var rooms = $firebaseArray(ref);

    /*
     * @desc A 'Room' property of the above.
     * @type { Object }
    */
    Room.all = rooms;

    /*
     * @func add
     * @desc Creates a new room object and adds it to the database.
     * @param {Object}
    */
    Room.add = function(room) {
      Room.all.$add(room);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
