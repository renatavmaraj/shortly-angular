angular.module('shortly.navigation', [])

.controller('NavigationController', function ($scope, Auth) {
  $scope.signout = function(){
    Auth.signout();
  };

});
