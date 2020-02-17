'use strict';

window.validate = (function () {
  var validateMessage = function (validate) {

    if (validate.tooShort) {
      return 'Имя должно состоять минимум из 2-х символов';
    } else if (validate.tooLong) {
      return 'Имя не должно превышать 25-ти символов';
    } else if (validate.valueMissing) {
      return 'Обязательное поле';
    }

    return '';
  };

  var onInputValidate = function () {
    var message = validateMessage(window.nodes.setupNodes.USER_NAME_INPUT.validity);
    window.nodes.setupNodes.USER_NAME_INPUT.setCustomValidity(message);
  };

  var userNameVilidate = function (element) {
    element.addEventListener('invalid', onInputValidate);
  };

  return {
    userNameVilidate: userNameVilidate
  };
})();
