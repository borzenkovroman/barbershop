$(function () {

  $('.testimonials__item-link').on('click', function () {
    $('.testimonials__item-text--hidden').toggleClass('active');
    $('.testimonials__item-link').toggleClass('active');
  });
  
  $('.portfolio__btn-main').on('click', function () {
    $('.portfolio__bottom-list--hidden').toggleClass('active');
    $('.portfolio__btn-main').toggleClass('active');
  });
  
  $('.testimonials__list').slick({
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-icon" width="10" height="18"><use xlink:href="images/icons/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-icon" width="10" height="18"><use xlink:href="images/icons/sprite.svg#arrow-next"></use></svg></button>',
    fade: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    
    if (height >= 100) {
      $('.header').addClass('fixed');
    } 
    else {
      $('.header').removeClass('fixed');
    }
  });

  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('active');
    $(this).toggleClass('active');
    $('#body').toggleClass('lock');
  });

  $('.menu__link, .menu__logo').on('click', function () {
    $('.menu').removeClass('active');
    $('.menu__btn').removeClass('active');
    $('#body').removeClass('lock');
  });

});