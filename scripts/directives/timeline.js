'use strict';

angular.module('habitat').directive('hbTimeline', function($rootScope, $location) {
  var timelineData = [
    {
      title: '25th Anniversary Gala',
      year: 'Tonight',
      hash: '/wall/gala',
    }, {
      title: '25 Years of HFHWR',
      year: '2013',
      hash: '/wall/25Years',
    }, {
      title: 'Terry Ann Thompson',
      year: '2012',
      familyStory: true,
      hash: '/gallery/family_thompson',
    }, {
      title: '1st Condominium Project (Cherry St)',
      year: '2006-2009',
      hash: '/gallery/first_condo',
    }, {
      title: 'Cambridge ReStore Opens',
      year: '2005',
      hash: '/gallery/restore_cambridge',
    }, {
      title: 'Pam and Roger Cruz',
      year: '2003',
      familyStory: true,
      hash: '/wall/family_cruz',
    }, {
      title: '1st Women\'s Build',
      year: '2000',
      hash: '/gallery/first_build_women',
    }, {
      title: '1st Annual Charity Golf Tournament',
      year: '1998',
      hash: '/gallery/first_golf',
    }, {
      title: '1st Cambridge Build',
      year: '1996',
      hash: '/gallery/first_build_cambridge',
    }, {
      title: 'Jimmy Carter Work Project',
      year: '1993',
      hash: '/gallery/jimmy',
    }, {
      title: 'Opening ReStore Waterloo',
      year: '1993',
      hash: '/gallery/restore_waterloo',
    }, {
      title: 'Ellie and Ken Fields',
      year: '1992',
      familyStory: true,
      hash: '/wall/family_fields',
    }, {
      title: 'HFHWR is Incorporated',
      year: '1988',
      hash: '/gallery/incorporated',
    }
  ];

  var kTimelinePaddingPercent = 8;

  return {
    restrict: 'A',
    scope: {},
    template:
      '<div class="timeline-line-container">' +
        '<div class="timeline-dot-container" ng-repeat="entry in entries" ng-style="{ left: entry.style }" ng-class="{ \'timeline-dot-family\': entry.familyStory , \'timeline-dot-active\': $index == activeDotIndex }">' +
          '<div class="timeline-year-container" ng-show="$index == activeDotIndex">' +
            '<div class="timeline-year">{{ entry.year }}</div>' +
          '</div>' +
          '<div class="timeline-dot" ng-click="dotClick($index)"></div>' +
        '</div>' +
      '</div>',
    link: function(scope, elem, attrs) {
      scope.entries = timelineData;
      for(var i = 0; i < timelineData.length; i++) {
        scope.entries[i].style = (kTimelinePaddingPercent + (100-kTimelinePaddingPercent) * i / timelineData.length) + '%';
      }

      scope.activeDotIndex = -1;

      scope.dotClick = function(index) {
        if (index === scope.activeDotIndex)
          return;

        scope.activeDotIndex = index;
        $rootScope.pageTitle = timelineData[index].title;
        $location.path(timelineData[index].hash);
      };

      scope.dotClick(0);
    }
  };
});

