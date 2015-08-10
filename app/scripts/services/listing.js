'use strict';

angular.module('publicacionesFavoritasApp')
  .service('Listing', function Listing($resource) {
    var Listing = $resource('https://api.mercadolibre.com/sites/MLA/search',null,{
      search: {
        method: 'GET',
        interceptor: {
          response: function(response){
            return response.resource.results;
          }
        }
      }
    });
    return Listing.bind({category: 'MLA1648'})
  });
