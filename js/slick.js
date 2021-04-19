
$('.center').slick({
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
});


$('.lazy').slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
});



      