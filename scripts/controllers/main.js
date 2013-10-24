
angular.module('habitat').controller('main', function($scope, content) {
  $scope.mainPage = content.mainPage;
});


var nextSlideTimeout = null;
var startSlideshowTimeout = null;

function stopSlideshow() {
  clearTimeout(startSlideshowTimeout);
  clearInterval(nextSlideTimeout);
  startSlideshowTimeout = setTimeout(startSlideshow, 300000);
}

function startSlideshow() {
  nextSlideTimeout = setInterval(nextSlide, 30000);
}

function nextSlide() {
  var timelineElements = document.getElementsByClassName('timeline-dot');
  var index = Math.floor(Math.random() * timelineElements.length);
  var el = angular.element(timelineElements[index]);
  el.triggerHandler('click');
}

//stopSlideshow();

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('touchstart', stopSlideshow);
});
