$(document).ready(function(){
  $('.recomendation-goods__slider').slick({
  //centerMode: true,
  //centerPadding: '60px',
  slidesToShow: 8,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
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
});
