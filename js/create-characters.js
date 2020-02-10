'use strict';

(function () {
  var NUMBER_CHARACTERS = 4;

  var renderCharacter = function (character) {
    var characterElement = window.nodes.SIMILAR_CHARACTER_TEMPLATE.cloneNode(true);

    characterElement.querySelector('.setup-similar-label').textContent = character.name;
    characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
    characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;

    return characterElement;
  };

  var addCharactersToList = function (characters) {
    var fragment = document.createDocumentFragment();

    characters.forEach(function (character) {
      fragment.appendChild(renderCharacter(character));
    });

    return fragment;
  };

  var createCharacters = function (count) {
    var characters = [];

    for (var i = 0; i < count; i++) {
      characters.push(window.generateCharacter());
    }

    return characters;
  };

  window.nodes.SIMILAR_LIST_ELEMENT.appendChild(addCharactersToList(createCharacters(NUMBER_CHARACTERS)));
})();
