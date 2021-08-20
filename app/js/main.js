$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },


  });

  var mixer = mixitup('.product__items');

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

});
