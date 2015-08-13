'use strict';

describe('Service: Favorites', function () {

  // load the service's module
  beforeEach(module('publicacionesFavoritasApp'));

  // instantiate service
  var Favorites;
  beforeEach(inject(function (favorites) {
    Favorites = favorites;
  }));

  it('should be favourite', function () {
    Favorites.update('MLA1234');
    expect(Favorites.isFavourite('MLA1234')).toBe(true);
  });

  it('should not be favourite', function () {
    Favorites.update('MLA1235');
    Favorites.update('MLA1235');
    expect(Favorites.isFavourite('MLA1235')).toBe(false);
  });

  it('should not be favourite because this element exists before as a favourite', function () {
    Favorites.update('MLA1234');
    expect(Favorites.isFavourite('MLA1234')).toBe(false);
  });

  it('other element should not be favourite', function () {
    expect(Favorites.isFavourite('MLA1236')).toBe(false);
  });

});
