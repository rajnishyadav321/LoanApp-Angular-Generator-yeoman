'use strict';

/**
 * @ngdoc function
 * @name app2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app2App
 */
angular.module('app2App')
  .controller('LoginCtrl',['$scope','$location','$http','StoreService','$window', function ($scope,$location,$http,StoreService,$window) {

  		$scope.loginData={};



  		$scope.login = function() {
	
  
  $http({
     method  : 'POST',
  url     : 'http://localhost:8080/login',
  data    : $.param($scope.loginData),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
}).then(function (response) {
   
    if(response.data.response==false){
    	$scope.loginData.email="";
    	$scope.loginData.password="";
    	alert("Username or password is invalid")
    }
    else{
    	
    	$window.sessionStorage.setItem("email",$scope.loginData.email);
    	
    	 $location.path('loanform'); 
    }
},function (error){
    alert("Error");
});
};


     $scope.goToRegister = function(view){
            $location.path(view); 
        }
  }]);
