// Slick carousel settings
$(document).ready(function () {
  $(".books-carousel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

// Carousel autoplay again after clicked
$(".books-carousel").on("touchstart", () => {
  $(".books-carousel").slick("slickPlay");
});
