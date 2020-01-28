'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_CHARACTERS = 4;

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarCharacterTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomElement = function (arrElements) {
  return arrElements[Math.floor(Math.random() * arrElements.length)];
};

var generateCharacter = function () {
  var firstName = getRandomElement(FIRST_NAME);
  var lastName = getRandomElement(LAST_NAME);
  var coatColor = getRandomElement(COAT_COLOR);
  var eyesColor = getRandomElement(EYES_COLOR);

  var character = {
    name: firstName + ' ' + lastName,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

  return character;
};

var createCharacters = function () {
  var characters = [];

  for (var i = 0; i < NUMBER_CHARACTERS; i++) {
    characters.push(generateCharacter());
  }

  return characters;
};

var renderCharacter = function (character) {
  var characterElement = similarCharacterTemplate.cloneNode(true);

  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;

  return characterElement;
};

var addCharactersToList = function (characters) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(renderCharacter(characters[i]));
  }

  return fragment;
};

similarListElement.appendChild(addCharactersToList(createCharacters()));

setupWindow.querySelector('.setup-similar').classList.remove('hidden');
