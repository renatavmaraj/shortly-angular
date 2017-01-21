angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addOne($scope.link).then().catch(function(err) { console.log('There was an error'); });
  };
});
