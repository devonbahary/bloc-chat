(function() {
  function UsernameCtrl($uibModalInstance) {
    /*
     * @func setUsername
     * @desc Sets the username
     * @param {String}
    */
    this.setUsername = function(username) {
      alert(username + "!");
      $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$uibModalInstance', UsernameCtrl]);
})();
