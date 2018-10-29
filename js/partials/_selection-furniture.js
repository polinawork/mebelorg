$('#how-it-work').parallax({
  'elements': [
    {
      'selector': '#how-it-work-img-1',
      'properties': {
        'x': {
          'left': {
            'initial': 200,
            'multiplier': 0.3,
            'unit': 'px',
            'invert': false
          }
        },
        'y': {
          'top': {
            'initial': -10,
            'multiplier': 0.4,
            'unit': 'px',
            'invert': false
          }
        }
      }
    },
    {
      'selector': '#how-it-work-img-2',
      'properties': {
        'x': {
          'left': {
            'initial': 350,
            'multiplier': 0.5,
            'unit': 'px',
            'invert': false
          }
        },
        'y': {
          'top': {
            'initial': 450,
            'multiplier': -0.8,
            'unit': 'px',
            'invert': false
          }
        }
      }
    },
    {
      'selector': '#how-it-work-img-3',
      'properties': {
        'x': {
          'left': {
            'initial': 700,
            'multiplier': -0.3,
            'unit': 'px',
            'invert': false
          }
        },
        'y': {
          'top': {
            'initial': 0,
            'multiplier': 0.2,
            'unit': 'px',
            'invert': false
          }
        }
      }
    },
    {
      'selector': '#how-it-work-img-4',
      'properties': {
        'x': {
          'left': {
            'initial': 840,
            'multiplier': -0.6,
            'unit': 'px',
            'invert': false
          }
        },
        'y': {
          'top': {
            'initial': 370,
            'multiplier': -0.4,
            'unit': 'px',
            'invert': false
          }
        }
      }
    }
  ]
});

$(document).ready(function (){
  $('input#email-application-furniture, input#email-application-furniture-modal').unbind().blur( function(){
    var id = $(this).attr('id');
    var val = $(this).val();
    var regexp_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(regexp_email.test(val)){
      $(this).removeClass('modal-window-error__input').addClass('modal-window-error__input_no');
      $("div.modal-window-error").remove();
    }
    else{
      $(this).removeClass('modal-window-error__input_no').addClass('modal-window-error__input');
      $("div.modal-window-error").remove();
      $(this).after('<div class="modal-window-error">Неверный формат</div>');
    }
  });
  $('textarea#textarea-application-furniture, textarea#textarea-application-furniture').unbind().blur( function(){
    var id = $(this).attr('id');
    var val = $(this).val();
    var regexp_password = /.+/;
    if(regexp_password.test(val)){
      $(this).removeClass('modal-window-error__textarea').addClass('modal-window-error__textarea_no');
        $("div.modal-window-error").remove();
      }
    else{
      $(this).removeClass('modal-window-error__textarea_no').addClass('modal-window-error__textarea');
      $("div.modal-window-error").remove();
      $(this).after('<div class="modal-window-error">Заполните поле.</div>');
    }
  });
});

$(".last-application__user-message_button-show").click(function(){
  var text = $(this).text()=='Скрыть'? 'Показать' : 'Скрыть';
  $(this).text(text);
}) 