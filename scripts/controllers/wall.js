'use strict';

angular.module('habitat').controller('wall', function($scope, $rootScope, $routeParams, content) {
  $scope.content = '/walls/' + content.wall[$routeParams.id];
  $rootScope.anchors = [];
  $scope.activeAnchor = 0;

  $scope.prepareWall = function() {
    var wallContentElement = document.getElementsByClassName('wall-content');
    angular.element(wallContentElement[0]).bind('scroll', function() {
      var scrollPosition = wallContentElement[0].scrollTop;
      for (var i = 0; i < $rootScope.anchors.length; i++) {
        if (scrollPosition <= $rootScope.anchors[i].scrollPosition) {
          $scope.activeAnchor = i;
          break;
        }
      }
      // Check for changes to the scope.
      // TODO: Is this necessary when prepareWall is called by ngInclude's onload?
      $scope.$apply();
    });
  };

  $scope.showAnchor = function(index) {
    var a = $rootScope.anchors[index];
    a.element.scrollIntoView();
    $scope.activeAnchor = index;
  };
});
