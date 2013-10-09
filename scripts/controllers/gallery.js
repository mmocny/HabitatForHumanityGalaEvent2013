
angular.module('habitat').controller('gallery', function($scope, $routeParams, content) {
  $scope.content = content.gallery[$routeParams.id];
});

