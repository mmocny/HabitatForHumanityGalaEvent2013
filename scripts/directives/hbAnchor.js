'use strict';

angular.module('habitat').directive('hbAnchor', function($rootScope) {
  return {
    restrict: 'AC',
    link: function(scope, elem, attrs) {
      var obj = {
        name: attrs['hbAnchor'],
        text: attrs['hbAnchorText'] || elem.text()
      };
      $rootScope.anchors.push(obj);
    }
  };
});

