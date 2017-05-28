'use strict';

describe('Controller: LoanformCtrl', function () {

  // load the controller's module
  beforeEach(module('app2App'));

  var LoanformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanformCtrl = $controller('LoanformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoanformCtrl.awesomeThings.length).toBe(3);
  });
});
