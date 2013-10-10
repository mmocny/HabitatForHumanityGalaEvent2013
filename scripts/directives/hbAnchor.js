'use strict';

angular.module('habitat').directive('hbAnchor', function($rootScope) {
  return {
    restrict: 'AC',
    link: function(scope, elem, attrs) {
      var obj = {
        name: attrs['hbAnchor'],
        text: attrs['hbAnchorText'] || elem.text(),
        scrollPosition: elem[0].offsetTop,
        element: elem[0]
      };
      $rootScope.anchors.push(obj);
    }
  };
});

