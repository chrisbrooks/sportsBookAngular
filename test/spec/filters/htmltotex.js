'use strict';

describe('Filter: htmlToTex', function () {

  // load the filter's module
  beforeEach(module('newappApp'));

  // initialize a new instance of the filter before each test
  var htmlToTex;
  beforeEach(inject(function ($filter) {
    htmlToTex = $filter('htmlToTex');
  }));

  it('should return the input prefixed with "htmlToTex filter:"', function () {
    var text = 'angularjs';
    expect(htmlToTex(text)).toBe('htmlToTex filter: ' + text);
  });

});
