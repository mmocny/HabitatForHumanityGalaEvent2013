'use strict';

angular.module('habitat').controller('wall', function($scope, $rootScope, $routeParams, content) {
  $scope.content = '/walls/' + content.wall[$routeParams.id];
  $rootScope.anchors = [];
  $scope.activeAnchor = 0;

  $scope.showAnchor = function(index) {
    // TODO: Implement me.
    console.log('showing anchor ' + index);
  };
});
