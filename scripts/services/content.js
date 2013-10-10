
// Factory is a wrapper around service. Angular calls the given function once, its return value becomes the
// service that gets injected. Not unlike a Node module.
angular.module('habitat').factory('content', function() {
  return {
    mainPage: 'I\'m the main page content, yay.',
    gallery: {
      1: ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg'], // /gallery/1
      2: ['cat6.jpg'] // /gallery/2
    },
    wall: {
      1: '1.html',
      2: '2.html'
    }
  };
});

