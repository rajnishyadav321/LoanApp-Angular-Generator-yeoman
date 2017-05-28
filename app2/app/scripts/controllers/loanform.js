'use strict';

/**
 * @ngdoc function
 * @name app2App.controller:LoanformCtrl
 * @description
 * # LoanformCtrl
 * Controller of the app2App
 */
angular.module('app2App')
  .controller('LoanformCtrl', function ($scope,StoreService,$http,$location,$window) {
     $scope.loanDetail={};
     $scope.keys = {
    "loanform": "loanform",
    "appliedloan": "appliedloan",
    
}
      $scope.$on('$viewContentLoaded', function(){
         var email=$window.sessionStorage.getItem("email");
        
    if(email==""||email==undefined){
      alert("You are not logged in");
       $location.path('login'); 
     }
      
  });
     
$scope.availableCities = [];
  	$scope.updateState = function(){
  			$scope.availableCities = [];

  angular.forEach($scope.cities, function(value){
    if(value.stateId == $scope.loanDetail.state.id){
      $scope.availableCities.push(value);
    }
  });
}
		
   $scope.states = [
   {
    "name": "Haryana",
    "id": 1
  },{
    "name": "Punjab",
    "id": 2
  },{
    "name": "UP",
    "id": 3
}];


$scope.cities = [
	

   {
    "name": "Faridabad",
    "id": 1,
    "stateId": 1
  }, {
    "name": "Gurgaon",
    "id": 2,
    "stateId": 1
  }, {
    "name": "Panipat",
    "id": 3,
    "stateId": 1
  }, {
    "name": "Ambala",
    "id": 4,
    "stateId": 1
  }, {
    "name": "Amritsar",
    "id": 5,
    "stateId": 2
   },
   {
    "name": "Ludiyana",
    "id": 6,
    "stateId": 2
  }, 
  {
    "name": "Jalandhar",
    "id": 7,
    "stateId": 2
  }, 
  {
    "name": "Kanpur",
    "id": 8,
    "stateId": 3
  }, 
  {
    "name": "Lucknow",
    "id": 9,
    "stateId": 3
  }, 
  {
    "name": "Agra",
    "id": 10,
    "stateId": 3
  }, 
  {
    "name": "Noida",
    "id": 11,
    "stateId": 3
  }
];

          $scope.saveLoanDetails = function(isValid) {
           // alert(StoreService.getEmail());

            if(isValid==true){
                       $scope.loanDetail.email=$window.sessionStorage.getItem("email");
 
    $scope.loanDetail.state=$scope.loanDetail.state.name;
    $scope.loanDetail.city=$scope.loanDetail.city.name;
   
  $http({
     method  : 'POST',
  url     : 'http://localhost:8080/saveD',
  data    : $.param($scope.loanDetail),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
}).then(function (response) {
   // alert(JSON.stringify(response));
    //alert(response.data.response);
   //alert("Response is arrived");
   if(response.data.response==true)
   {
    alert("Already applied for loan by "+$scope.loanDetail.email);
   }
   else{
    
  //$window.localStorage.setItem("purposeofloan",$scope.loanDetail.purposeofloan);
  $window.sessionStorage.setItem("loanDetail",JSON.stringify($scope.loanDetail));
  StoreService.saveData(JSON.stringify($scope.loanDetail));
    $location.path('loanapplied');
   }
   
   
},function (error){
    alert("Error or login");
});
            }
            else{
              alert("Please fill all fields");
            }
};

  });
