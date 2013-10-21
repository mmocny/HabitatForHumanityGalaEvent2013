
// Factory is a wrapper around service. Angular calls the given function once, its return value becomes the
// service that gets injected. Not unlike a Node module.
angular.module('habitat').factory('content', function() {
  return {
    wall: {
      '25Years': '25Years.html',
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
    },
    gallery: {
      family_cruz: [
        'family_cruz/1.jpg',
      ],
      family_fields: [
        'family_fields/7.jpg',
        'family_fields/1.jpg',
        //'family_fields/2.jpg',
        'family_fields/3.jpg',
        'family_fields/4.jpg',
        'family_fields/5.jpg',
        //'family_fields/6.jpg',
        'family_fields/8.jpg',
      ],
      family_thompson: [
        'family_thompson/13.jpg',
        'family_thompson/12.jpg',
        'family_thompson/10.jpg',
        'family_thompson/1.jpg',
        //'family_thompson/2.jpg',
        //'family_thompson/3.jpg',
        //'family_thompson/4.jpg',
        //'family_thompson/5.jpg',
        //'family_thompson/6.jpg',
        //'family_thompson/7.jpg',
        //'family_thompson/8.jpg',
        //'family_thompson/9.jpg',
        //'family_thompson/11.jpg',
      ],
      first_build_cambridge: [
        '',
      ],
      first_build_women: [
        'first_build_women/1.jpg',
        'first_build_women/2.jpg',
        'first_build_women/3.jpg',
        'first_build_women/4.jpg',
      ],
      first_condo: [
        'first_condo/1.jpg',
        'first_condo/3.jpg',
      ],
      first_golf: [
        'first_golf/1.jpg',
        'first_golf/2.jpg',
      ],
      gala: [
        '',
      ],
      incorporated: [
        'incorporated/2.jpg',
        'incorporated/1.jpg',
      ],
      jimmy: [
        'jimmy/12.jpg',
        'jimmy/6.jpg',
        'jimmy/8.jpg',
        'jimmy/1.jpg',
        'jimmy/2.jpg',
        'jimmy/3.jpg',
        'jimmy/4.jpg',
        'jimmy/5.jpg',
        'jimmy/7.jpg',
        'jimmy/9.jpg',
        'jimmy/10.jpg',
        'jimmy/11.jpg',
      ],
      restore_cambridge: [
        'restore_cambridge/2.jpg',
        'restore_cambridge/1.jpg',
      ],
      restore_waterloo: [
        'restore_waterloo/4.jpg',
        'restore_waterloo/1.jpg',
        'restore_waterloo/2.jpg',
        'restore_waterloo/3.jpg',
        'restore_waterloo/5.jpg',
        'restore_waterloo/6.jpg',
        'restore_waterloo/7.jpg',
      ],
    },
  };
});

