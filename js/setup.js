'use strict';

(function () {
  window.nodes.SetupNode.FIREBALL.addEventListener('click', window.colorize.onFireballColorClick);
  window.nodes.SetupNode.WIZARD_EYES.addEventListener('click', window.colorize.onEyesColorClick);
  window.nodes.SetupNode.WIZARD_COAT.addEventListener('click', window.colorize.onCoatColorClick);
  window.validate.userNameVilidate(window.nodes.SetupNode.USER_NAME_INPUT);

  window.backend.load(window.similar.successHandler, window.util.errorHandler);
  window.nodes.SetupNode.SETUP_SIMILAR.classList.remove('hidden');
})();

