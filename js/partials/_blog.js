$(document).ready(function(){
  var url = $('.article__background').attr("data-image-src");
  //alert(url);
  $('.article__background').parallax({imageSrc: $('.article__background').attr("data-image-src")});
});
