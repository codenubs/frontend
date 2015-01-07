'use strict';

angular.module('codenubs')
  .controller('MainCtrl', function ($scope) {
    
    $http.get($rootScope.apiBaseurl + 'application/' + $scope.application.mineral + '/' + $scope.application.scale, {'cache': true}).success(function(data){
      $scope.applications = data;
    });
  });
