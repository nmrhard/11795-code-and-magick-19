'use strict';

window.createCharacter = (function () {
  var NUMBER_CHARACTERS = 4;

  var renderCharacter = function (character) {
    var characterElement = window.nodes.SIMILAR_CHARACTER_TEMPLATE.cloneNode(true);

    characterElement.querySelector('.setup-similar-label').textContent = character.name;
    characterElement.querySelector('.wizard-coat').style.fill = character.colorCoat;
    characterElement.querySelector('.wizard-eyes').style.fill = character.colorEyes;

    return characterElement;
  };

  var addCharactersToList = function (characters) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_CHARACTERS; i++) {
      fragment.appendChild(renderCharacter(characters[i]));
    }

    window.nodes.setupNodes.SIMILAR_LIST_ELEMENT.appendChild(fragment);
  };

  return {
    addCharactersToList: addCharactersToList
  };
})();
