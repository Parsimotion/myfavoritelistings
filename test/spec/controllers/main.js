'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('publicacionesFavoritasApp'));

  var MainCtrl, scope, listings, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    listings = [{id: 'MLA1234', title: 'iPhone 6'},{id: 'MLA1235', title: 'Samsung Galaxy'}];
    scope = $rootScope.$new();
    location = $location;
    location.search('query','smartphones');
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      listings: listings
    });
  }));

  it('should attach the listings to the scope', function () {
    expect(scope.listings).toBe(listings);
  });

  it('should attach the query in the scope', function () {
    expect(scope.text).toBe('smartphones');
  });

  it('should add text as query string parameter when search is called', function () {
    scope.text = 'bicycles';
    scope.search();
    expect(location.search().query).toBe('bicycles');
  });
});
