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

  it('should do something', function () {
    Listing.search({q: 'samsung'});
    httpBackend.flush();
  });

});
