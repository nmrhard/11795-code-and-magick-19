'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var Name = {
  FIRST: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  LAST: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};
var Color = {
  COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES: ['black', 'red', 'blue', 'yellow', 'green']
};
var Nodes = {
  SIMILAR_LIST_ELEMENT: document.querySelector('.setup-similar-list'),
  SIMILAR_CHARACTER_TEMPLATE: document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
  SETUP_WINDOW: document.querySelector('.setup'),
  SETUP_OPEN: document.querySelector('.setup-open'),
  SETUP_CLOSE: document.querySelector('.setup-close')
};
var NUMBER_CHARACTERS = 4;

var getRandomElement = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var generateCharacter = function () {
  return {
    name: getRandomElement(Name.FIRST) + ' ' + getRandomElement(Name.LAST),
    coatColor: getRandomElement(Color.COAT),
    eyesColor: getRandomElement(Color.EYES)
  };
};

var createCharacters = function (count) {
  var characters = [];

  for (var i = 0; i < count; i++) {
    characters.push(generateCharacter());
  }

  return characters;
};

var renderCharacter = function (character) {
  var characterElement = Nodes.SIMILAR_CHARACTER_TEMPLATE.cloneNode(true);

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

var onSetupEscKeyDown = function (evt) {
  if (evt.key === ESC_KEY && evt.target.className !== 'setup-user-name') {
     closeSetup();
    }
  };

var openSetup = function () {
  Nodes.SETUP_WINDOW.classList.remove('hidden');

  document.addEventListener('keydown', onSetupEscKeyDown);
};

var closeSetup = function () {
  Nodes.SETUP_WINDOW.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscKeyDown)
}

Nodes.SETUP_OPEN.addEventListener('click', function () {
  openSetup();
});

Nodes.SETUP_OPEN.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openSetup();
  }
});

Nodes.SETUP_CLOSE.addEventListener('click', function () {
  closeSetup();
});

Nodes.SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetup();
  }
});

Nodes.SIMILAR_LIST_ELEMENT.appendChild(addCharactersToList(createCharacters(NUMBER_CHARACTERS)));
Nodes.SETUP_WINDOW.querySelector('.setup-similar').classList.remove('hidden');
