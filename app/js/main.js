$(function () {
  var mixer = mixitup('.product__items');


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
})