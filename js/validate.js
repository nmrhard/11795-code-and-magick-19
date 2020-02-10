'use strict';

(function () {
  var validateMessage = function (validate) {
    var message = '';

    if (validate.tooShort) {
      message = 'Имя должно состоять минимум из 2-х символов';
    } else if (validate.tooLong) {
      message = 'Имя не должно превышать 25-ти символов';
    } else if (validate.valueMissing) {
      message = 'Обязательное поле';
    }

    return message;
  };

  var onInputValidate = function () {
    var message = validateMessage(window.setupNodes.USER_NAME_INPUT.validity);
    window.setupNodes.USER_NAME_INPUT.setCustomValidity(message);
  };

  window.validate = function (element) {
    element.addEventListener('invalid', onInputValidate);
  };
})();
