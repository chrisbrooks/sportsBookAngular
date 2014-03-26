'use strict';

describe('Service: ajaxcall', function () {

  // load the service's module
  beforeEach(module('newappApp'));

  // instantiate service
  var ajaxcall;
  beforeEach(inject(function (_ajaxcall_) {
    ajaxcall = _ajaxcall_;
  }));

  it('should do something', function () {
    expect(!!ajaxcall).toBe(true);
  });

});
