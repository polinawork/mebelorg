//// Promo modal
// валидация формы
$(document).ready(function () {

  var promoModalConfirm = false;

  // функция проверка формы и добавление\удаление блокировки
  function checkCartForm() {
    if (promoModalConfirm) {
      $('.discount-modal__btn').removeClass('btn-blocked').attr("disabled", false);
    } else {
      $('.discount-modal__btn').addClass('btn-blocked').attr("disabled", true);
    }
  }

  // проверка полей ввода
  $('.discount-modal__input').keyup(function() {

    var promoInputConfirm = $('.discount-modal__input--confirm').length;

    if (promoInputConfirm === 3) {
      promoModalConfirm = true;
    } else {
      promoModalConfirm = false;
    }

    // проверка кнопки
    checkCartForm();

  });

  $('.discount-modal__input-name').on("keypress keyup blur", function(event) {
    if ((event.which < 96 || event.which > 123) && (event.which < 1040 || event.which > 1105) ) {
      event.preventDefault();
    }
    if ($(this).val().length > 1) {
      $(this).addClass('discount-modal__input--confirm');
    } else {
      $(this).removeClass('discount-modal__input--confirm');
    }
  });

  $(".discount-modal__input-link").on("keypress keyup blur", function(event) {
    if ($(this).val().length > 5) {
      $(this).addClass('discount-modal__input--confirm');
    } else {
      $(this).removeClass('discount-modal__input--confirm');
    }
  });

  $('.discount-modal__input-email').keyup(function(event) {

    if ($(this).val() != '') {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      if (pattern.test($(this).val())) {
        $(this).addClass('discount-modal__input--confirm');
      } else {
        $(this).removeClass('discount-modal__input--confirm');
      }
    } else {
      $(this).removeClass('discount-modal__input--confirm');
    }
  });

});

// Промо модалка Клик по Отправить
$('.discount-modal__btn').click(function () {
  $('.discount-modal__confirm').show();
  $('.discount-modal__header').hide();
  $('.discount-modal__form').hide();
});
