(function() {
  function UsernameCtrl($uibModalInstance, $cookies) {
    /*
     * @func setUsername
     * @desc Puts 'username' into cookies on browser
     * @param {String}
    */
    this.setUsername = function(username) {
      // determine if username contains characters
      if (username.trim().length > 0) {
        $cookies.put('blocChatCurrentUser', username);
        $uibModalInstance.close();
      }
    };
  }

  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
