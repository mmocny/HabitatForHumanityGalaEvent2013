'use strict';

angular.module('habitat').controller('wall', function($scope, $rootScope, $routeParams, content) {
  $scope.content = '/walls/' + content.wall[$routeParams.id];
  $rootScope.anchors = [];
  $scope.state = { activeAnchor: 0 };

  var justScrolledToAnchor = false;
  $scope.prepareWall = function() {
    var wallContentElement = document.getElementsByClassName('wall-content');
    angular.element(wallContentElement[0]).bind('scroll', function() {
      if (justScrolledToAnchor) {
        justScrolledToAnchor = false;
        return;
      }

      var scrollPosition = wallContentElement[0].scrollTop;
      for (var i = 0; i < $rootScope.anchors.length; i++) {
        if (scrollPosition >= $rootScope.anchors[i].scrollPosition) {
          $scope.state.activeAnchor = i;
        } else {
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
    $scope.state.activeAnchor = index;
    justScrolledToAnchor = true;
  };
});
