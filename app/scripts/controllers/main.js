'use strict';

angular.module('publicacionesFavoritasApp')
  .controller('MainCtrl', function ($scope, listings, $location, favorites) {
    $scope.listings = listings;
    $scope.text = $location.search().query;
    $scope.search = function(){
      $location.search({query: $scope.text});
    };
    $scope.update = function(id){
      favorites.update(id);
    }

    $scope.isFavourite = function(id){
      return favorites.isFavourite(id);
    }
  });
