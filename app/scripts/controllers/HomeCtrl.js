(function() {
  function HomeCtrl($scope, Room) {
    /*
     * @desc The $firebaseArray Rooms database from the 'Room' service
     * @type {Object}
    */
    $scope.rooms = Room.all;

    /*
     * @func createRoom
     * @desc Creates a new room object and adds it to the 'Room.all' database
    */
    $scope.createRoom = function() {
      var newRoom = {};
      var roomNumber = Room.all.length + 1;
      newRoom["room" + roomNumber] = "room" + roomNumber;
      Room.add(newRoom);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
