$(document).ready(function(){
  $('.same-articles-after__slider').slick({
  //centerMode: true,
  //centerPadding: '60px',
  slidesToShow: 6,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
});
