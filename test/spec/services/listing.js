'use strict';

describe('Service: Listing', function () {

  // load the service's module
  beforeEach(module('publicacionesFavoritasApp'));

  // instantiate service
  var Listing, httpBackend;
  beforeEach(inject(function (_Listing_, $httpBackend) {
    Listing = _Listing_;
    httpBackend = $httpBackend;
  }));

  it('should send a GET request to Mercadolibre API with the supplied query when search is called', function () {
    Listing.search({q: 'samsung'});
    httpBackend.expectGET('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&q=samsung').respond(200);
    httpBackend.flush();
  });

});
