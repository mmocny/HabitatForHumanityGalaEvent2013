'use strict';

angular.module('habitat').controller('wall', function($scope, $routeParams, content) {
  $scope.content = content.wall[$routeParams.id];
});

