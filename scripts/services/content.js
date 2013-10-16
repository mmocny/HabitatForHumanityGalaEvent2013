
// Factory is a wrapper around service. Angular calls the given function once, its return value becomes the
// service that gets injected. Not unlike a Node module.
angular.module('habitat').factory('content', function() {
  return {
    mainPage: 'I\'m the main page content, yay.',
    gallery: {
      family_cruz: [''],
      family_fields: [''],
      family_thompson: [''],
      first_build_cambridge: [''],
      first_build_women: [''],
      first_condo: [''],
      first_golf: [''],
      gala: [''],
      incorporated: [''],
      jimmy: [''],
      restore_cambridge: [''],
      restore_waterloo: [''],
    },
    wall: {
      family_cruz: 'family_cruz.html',
      family_fields: 'family_fields.html',
      family_thompson: 'family_thompson.html',
      first_build_cambridge: 'first_build_cambridge.html',
      first_build_women: 'first_build_women.html',
      first_condo: 'first_condo.html',
      first_golf: 'first_golf.html',
      gala: 'gala.html',
      incorporated: 'incorporated.html',
      jimmy: 'jimmy.html',
      restore_cambridge: 'restore_cambridge.html',
      restore_waterloo: 'restore_waterloo.html',
    }
  };
});

