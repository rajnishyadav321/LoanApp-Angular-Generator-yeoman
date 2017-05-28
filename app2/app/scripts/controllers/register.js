'use strict';

/**
 * @ngdoc function
 * @name app2App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the app2App
 */
angular.module('app2App')
  .controller('RegisterCtrl', function ($scope,$http,$location) {
    	$scope.formData={};


    	// process the form
$scope.processForm = function(isValid) {
	
	if(isValid){

  
  $http({
     method  : 'POST',
  url     : 'http://localhost:8080/add',
  data    : $.param($scope.formData),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
}).then(function (response) {
  		if(response.data.response==true){
  			alert("User is already registered");
  		}
  		else{
  			alert("You are registered. Now Login");
  			$location.path('login'); 
  		}
    
},function (error){
    alert("Error");
});
	}
	else{
		alert("Form is invalid.");
	}

};
  });
