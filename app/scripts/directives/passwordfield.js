function validatePassword(password) {
    if (password.length >= 8) {
        return 'ok';
    } else {
        return 'bad';
    }
}


angular.module('ngDirectivesApp').directive('passwordField', function(){

    return {
      restrict: 'A',
      templateUrl: '/views/directives/passwordfield.html',
      link: function (scope, elem, attrs) {
        scope.pwdStatut = '';
        scope.pwdVal = '';
        scope.is_valid = function () {
            scope.pwdStatut = validatePassword(scope.pwdVal);
        };

        console.log("Recognized the fundoo-rating directive usage");
      }
    }
})