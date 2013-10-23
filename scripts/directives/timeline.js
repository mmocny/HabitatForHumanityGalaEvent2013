'use strict';

angular.module('habitat').directive('hbTimeline', function($rootScope, $location) {
  var timelineData = [
    {
      title: 'Diamond Sponsor: Toyota Motor Manufacturing',
      year: 'Tonight',
      hash: '/wall/gala',
    }, {
      title: '2013: 25 Years of HFHWR',
      year: '2013',
      hash: '/wall/25Years',
    }, {
      title: '2012: Terry Ann Thompson',
      year: '2012',
      familyStory: true,
      hash: '/gallery/family_thompson',
    }, {
      title: '2006-2009: 1st Condominium Project (Cherry St)',
      year: '2006-2009',
      hash: '/gallery/first_condo',
    }, {
      title: '2005: Cambridge ReStore Opens',
      year: '2005',
      hash: '/gallery/restore_cambridge',
    }, {
      title: '2003: Pam and Roger Cruz',
      year: '2003',
      familyStory: true,
      hash: '/wall/family_cruz',
    }, {
      title: '2000: 1st Women\'s Build',
      year: '2000',
      hash: '/gallery/first_build_women',
    }, {
      title: '1998: 1st Annual Charity Golf Tournament',
      year: '1998',
      hash: '/gallery/first_golf',
    }, {
      title: '1996: 1st Cambridge Build',
      year: '1996',
      hash: '/gallery/first_build_cambridge',
    }, {
      title: '1993: Jimmy Carter Work Project',
      year: '1993',
      hash: '/gallery/jimmy',
    }, {
      title: '1993: Opening ReStore Waterloo',
      year: '1993',
      hash: '/gallery/restore_waterloo',
    }, {
      title: '1992: Ellie and Ken Fields',
      year: '1992',
      familyStory: true,
      hash: '/wall/family_fields',
    }, {
      title: '1988: HFHWR is Incorporated',
      year: '1988',
      hash: '/gallery/incorporated',
    }
  ];

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
      var kTimelinePaddingPercent = (100/timelineData.length);
      for(var i = 0; i < timelineData.length; i++) {
        scope.entries[i].style = (kTimelinePaddingPercent + (100-(2*kTimelinePaddingPercent)) * i / timelineData.length) + '%';
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

