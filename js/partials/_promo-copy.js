$(document).ready(function(){
  $('.promo-card__btn-promo .copy img').click(function() {
    $('.promo-card__btn-promo .code').attr('disabled', false);
    $('.promo-card__btn-promo .code').focus();
    $('.promo-card__btn-promo .code').select();
    if (document.execCommand('copy')) {
      $('.promo-card__btn-promo .copy .hint--top').attr('aria-label', 'Скопировано');
    }else{

    };
    $('.promo-card__btn-promo .code').attr('disabled', true);
  });
});
