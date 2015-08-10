'use strict';

angular.module('publicacionesFavoritasApp')
  .service('Listing', function Listing($resource) {
    return $resource('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648',null,{
      search: {
        method: 'GET',
        interceptor: {
          response: function(response){
            return response.resource.results;
          }
        }
      }
    });
  });
