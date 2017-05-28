'use strict';

describe('Controller: LoanappliedCtrl', function () {

  // load the controller's module
  beforeEach(module('app2App'));

  var LoanappliedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanappliedCtrl = $controller('LoanappliedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoanappliedCtrl.awesomeThings.length).toBe(3);
  });
});
