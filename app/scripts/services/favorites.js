'use strict';

angular.module('publicacionesFavoritasApp')
  .service('favorites', function (localStorageService) {
    return {
      update: function(id) {
        var state = localStorageService.get(id);
        localStorageService.set(id,!state);
      },
      isFavourite: function(id) {
        return !!localStorageService.get(id);
      }
    }
  });
