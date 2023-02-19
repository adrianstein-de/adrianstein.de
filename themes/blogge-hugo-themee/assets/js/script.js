$(document).ready(function () {
  "use strict";
  //  Headroom Initialize
});

$(".widget-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// sticky nav
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("#cp-header").addClass("sticky");
    $("#cp-logo").addClass("sticky-logo");
  } else {
    $("#cp-header").removeClass("sticky");
    $("#cp-logo").removeClass("sticky-logo");
  }
});
