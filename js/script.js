$(document).ready(function(){

  // Home Main Slider =================================================
  $('.homepage-main-slider-parent')
    .on('init', function(slick) {
      $(this).fadeIn(2000);
    })
    .slick({
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      cssEase: 'linear',
      dots: true
    });
  $('.hms-prev').click(function(){ $('.homepage-main-slider-parent').slick('slickPrev'); });
  $('.hms-next').click(function(){ $('.homepage-main-slider-parent').slick('slickNext'); });

  // Lobby Navigation =================================================
  $('.lobby-navigation.desktop').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 8,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 5, slidesToScroll: 5, initialSlide: 8, arrows: true } },
      { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 3, initialSlide: 8, arrows: true } }
    ]
  });
  $('.lobby-navigation.mobile').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 8,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 5, slidesToScroll: 5, arrows: true } },
      { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 3, arrows: true } }
    ]
  });

  // Game Sliders =================================================
  $('.game-slide-container')
    .on('init', function(slick) {
      $(this).fadeIn(2000);
    })
    .slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } }
      ]
    });

  // Testimonial Slider ======================================
  $('.testimonial-slides').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  });

  // Home Bottom Slider ====================================
  $('.homepage-bottom-slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  });
  $('.hbs-prev').click(function(){ $('.homepage-bottom-slider').slick('slickPrev'); });
  $('.hbs-next').click(function(){ $('.homepage-bottom-slider').slick('slickNext'); });

  // Mobile Menu
  $('.mobile-menu-toggle').click(function(){
    $('.mobile-menu').toggleClass('open');
    $('.mobile-menu-overlay').fadeIn(400);
  });
  $('.mobile-menu-overlay, .mobile-menu-close').click(function(){
    $('.mobile-menu').removeClass('open');
    $('.mobile-menu-overlay').fadeOut(400);
  });

});
