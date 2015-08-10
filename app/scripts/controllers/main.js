'use strict';

angular.module('publicacionesFavoritasApp')
  .controller('MainCtrl', function ($scope, listings, $location) {
    $scope.listings = listings;
    $scope.text = $location.search().query;
    $scope.search = function(){
      $location.search({query: $scope.text});
    };
  });
