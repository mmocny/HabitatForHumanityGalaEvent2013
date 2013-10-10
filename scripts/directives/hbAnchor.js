'use strict';

angular.module('habitat').directive('hbAnchor', function($rootScope) {
  return {
    restrict: 'AC',
    link: function(scope, elem, attrs) {
      var prevAnchor = $rootScope.anchors.length ? $rootScope.anchors[$rootScope.anchors.length-1] : null;
      var obj = {
        name: attrs['hbAnchor'],
        text: attrs['hbAnchorText'] || elem.text(),
        scrollPosition: prevAnchor ? prevAnchor.scrollPosition + prevAnchor.element.offsetHeight : 0,
        element: elem[0]
      };
      $rootScope.anchors.push(obj);
    }
  };
});

