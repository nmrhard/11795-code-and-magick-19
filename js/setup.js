'use strict';

(function () {
  var NUMBER_CHARACTERS = 4;

  window.nodes.setupNodes.FIREBALL.addEventListener('click', window.colorize.onFireballColorClick);
  window.nodes.setupNodes.WIZARD_EYES.addEventListener('click', window.colorize.onEyesColorClick);
  window.nodes.setupNodes.WIZARD_COAT.addEventListener('click', window.colorize.onCoatColorClick);
  window.validate.userNameVilidate(window.nodes.setupNodes.USER_NAME_INPUT);

  window.nodes.setupNodes.SIMILAR_LIST_ELEMENT.appendChild(
    window.createCharacter.addCharactersToList(window.data.mock(NUMBER_CHARACTERS))
    );
  window.nodes.setupNodes.SETUP_SIMILAR.classList.remove('hidden');
})();

