'use strict';

(function () {
  window.colorize(window.setupNodes.FIREBALL);
  window.colorize(window.setupNodes.WIZARD_EYES);
  window.colorize(window.setupNodes.WIZARD_COAT);
  window.validate(window.setupNodes.USER_NAME_INPUT);

  window.nodes.SETUP_WINDOW.querySelector('.setup-similar').classList.remove('hidden');
})();

