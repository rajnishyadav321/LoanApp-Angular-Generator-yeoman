'use strict';

/**
 * @ngdoc service
 * @name app2App.StoreService
 * @description
 * # StoreService
 * Service in the app2App.
 */
angular.module('app2App')
  .service('StoreService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var loanData={};
    
  this.saveData=function(data){        
       this.loanData=data;

  };
  

  this.getData=function(key){

    return loanData;

  };
  
  });
