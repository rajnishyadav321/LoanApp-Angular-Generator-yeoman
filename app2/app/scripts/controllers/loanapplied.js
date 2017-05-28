'use strict';

/**
 * @ngdoc function
 * @name app2App.controller:LoanappliedCtrl
 * @description
 * # LoanappliedCtrl
 * Controller of the app2App
 */
angular.module('app2App')
  .controller('LoanappliedCtrl', function ($scope,$window,StoreService,$location) {
   	$scope.loanDetail=JSON.parse($window.sessionStorage.getItem("loanDetail"));
   	 $scope.$on('$viewContentLoaded', function(){
      var email=$window.sessionStorage.getItem("email");
        
    if(email==""||email==undefined){
      alert("You are not logged in");
       $location.path('login'); 
     }
      
  });
  });
