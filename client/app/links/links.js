angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getAll = function() {
    Links.getAll().then(function(links) {
      $scope.data.links = links;
    }).catch(function(err) {
      console.log('error getting scope data links', err);
    });
  }();

});
