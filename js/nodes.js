'use strict';

window.nodes = (function () {

  var SIMILAR_CHARACTER_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var SETUP_WINDOW = document.querySelector('.setup');
  var SETUP_OPEN = document.querySelector('.setup-open');

  var SetupNode = {
    SETUP_CLOSE: SETUP_WINDOW.querySelector('.setup-close'),
    DIALOG_HANDLER: SETUP_WINDOW.querySelector('.upload'),
    USER_NAME_INPUT: SETUP_WINDOW.querySelector('.setup-user-name'),
    WIZARD_COAT: SETUP_WINDOW.querySelector('.wizard-coat'),
    WIZARD_EYES: SETUP_WINDOW.querySelector('.wizard-eyes'),
    FIREBALL: SETUP_WINDOW.querySelector('.setup-fireball-wrap'),
    SETUP_SIMILAR: SETUP_WINDOW.querySelector('.setup-similar'),
    COAT_COLOR_INPUT: SETUP_WINDOW.querySelector('input[name=coat-color]'),
    EYES_COLOR_INPUT: SETUP_WINDOW.querySelector('input[name=eyes-color]'),
    FIREBALL_COLOR_INPUT: SETUP_WINDOW.querySelector('input[name=fireball-color]'),
    SIMILAR_LIST_ELEMENT: SETUP_WINDOW.querySelector('.setup-similar-list'),
    SETUP_FORM: SETUP_WINDOW.querySelector('.setup-wizard-form')
  };

  return {
    SetupNode: SetupNode,
    SIMILAR_CHARACTER_TEMPLATE: SIMILAR_CHARACTER_TEMPLATE,
    SETUP_WINDOW: SETUP_WINDOW,
    SETUP_OPEN: SETUP_OPEN
  };
})();
