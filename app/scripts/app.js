'use strict';

angular
  .module('publicacionesFavoritasApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          listings: function(Listing, $location) {
            var query = $location.search().query;
            return Listing.search({q: query}).$promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
