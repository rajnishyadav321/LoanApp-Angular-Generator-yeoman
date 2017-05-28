'use strict';

describe('Service: StoreService', function () {

  // load the service's module
  beforeEach(module('app2App'));

  // instantiate service
  var StoreService;
  beforeEach(inject(function (_StoreService_) {
    StoreService = _StoreService_;
  }));

  it('should do something', function () {
    expect(!!StoreService).toBe(true);
  });

});
