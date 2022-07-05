
jQuery(document).ready(function($) {
  $('.loop').owlCarousel({
    center: true,
    items:1.5,
    loop: true,
    pagination: false,
    margin: 10,
    responsive: {
      992: {
        items: 5,
        loop:false,
        center:false,
      },
       780: {
        items: 3,
        loop:true,
        center:false,
      },

      480: {
        items: 2,
        loop:true,
        center:false
        ,
      }
    }
  });

});



