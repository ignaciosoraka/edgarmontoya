(function($) {
  "use strict";

  /* Coberturas */
  $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  $(document).ready(function() {
      $('.navbar-collapse a').click(function(){
          $(".navbar-collapse").collapse('hide');
      });

      function initParallax() {
          $('#intro').parallax("100%", 0.1);
          $('#overview').parallax("100%", 0.3);
          $('#detail').parallax("100%", 0.2);
          $('#video').parallax("100%", 0.3);
          $('#servicios').parallax("100%", 0.1);
          $('#program').parallax("100%", 0.2);
          $('#register').parallax("100%", 0.1);
          $('#faq').parallax("100%", 0.3);
          $('#venue').parallax("100%", 0.1);
          $('#sponsors').parallax("100%", 0.3);
          $('#contact').parallax("100%", 0.2);
      }
      initParallax();

      $(document).ready(function() {
          $("#owl-servicios").owlCarousel({
              autoPlay: 6000,
              items : 4,
              itemsDesktop : [1199,2],
              itemsDesktopSmall : [979,1],
              itemsTablet: [768,1],
              itemsTabletSmall: [985,2],
              itemsMobile : [479,1],
          });
      });

      $(window).scroll(function() {
          if ($(this).scrollTop() > 200) {
              $('.go-top').fadeIn(200);
          } else {
              $('.go-top').fadeOut(200);
          }
      });   

      $('.go-top').click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: 0}, 300);
      });

      new WOW({ mobile: false }).init();
  });

})(window.jQuery);

(function($) {
  "use strict";

  /* Planes */
  // Aquí puedes colocar el otro script para los planes

})(window.jQuery);
