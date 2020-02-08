'use strict';

var Nodes = {
  SIMILAR_LIST_ELEMENT: document.querySelector('.setup-similar-list'),
  SIMILAR_CHARACTER_TEMPLATE: document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
  SETUP_WINDOW: document.querySelector('.setup'),
  SETUP_OPEN: document.querySelector('.setup-open')
};
var SetupNodes = {
  SETUP_CLOSE: Nodes.SETUP_WINDOW.querySelector('.setup-close'),
  USER_NAME_INPUT: Nodes.SETUP_WINDOW.querySelector('.setup-user-name'),
  WIZARD_COAT: Nodes.SETUP_WINDOW.querySelector('.wizard-coat'),
  WIZARD_EYES: Nodes.SETUP_WINDOW.querySelector('.wizard-eyes'),
  FIREBALL: Nodes.SETUP_WINDOW.querySelector('.setup-fireball-wrap'),
  COAT_COLOR_INPUT: Nodes.SETUP_WINDOW.querySelector('input[name=coat-color]'),
  EYES_COLOR_INPUT: Nodes.SETUP_WINDOW.querySelector('input[name=eyes-color]'),
  FIREBALL_COLOR_INPUT: Nodes.SETUP_WINDOW.querySelector('input[name=fireball-color]')
};
var NUMBER_CHARACTERS = 4;

var createCharacters = function (count) {
  var characters = [];

  for (var i = 0; i < count; i++) {
    characters.push(window.generateCharacter());
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


// Close/open window setup

var onSetupEscKeyDown = function (evt) {
  if (evt.key === Key.ESC && evt.target !== SetupNodes.USER_NAME_INPUT) {
    closeSetup();
  }
};

var openSetup = function () {
  Nodes.SETUP_WINDOW.classList.remove('hidden');

  document.addEventListener('keydown', onSetupEscKeyDown);
};

var closeSetup = function () {
  Nodes.SETUP_WINDOW.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscKeyDown);
};

Nodes.SETUP_OPEN.addEventListener('click', function () {
  openSetup();
});

Nodes.SETUP_OPEN.addEventListener('keydown', function (evt) {
  if (evt.key === Key.ENTER) {
    openSetup();
  }
});

SetupNodes.SETUP_CLOSE.addEventListener('click', function () {
  closeSetup();
});

SetupNodes.SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.key === Key.ENTER) {
    closeSetup();
  }
});

// Validate user name input

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

var onUserNameValidate = function () {
  var message = validateMessage(SetupNodes.USER_NAME_INPUT.validity);
  SetupNodes.USER_NAME_INPUT.setCustomValidity(message);
};

SetupNodes.USER_NAME_INPUT.addEventListener('invalid', onUserNameValidate);

// Change character

var changeElementColor = function (element, cssProperty, color) {
  element.setAttribute('style', cssProperty + ': ' + color);
};

var onChangeColorClick = function (evt) {
  var color = '';
  var currentElement = evt.currentTarget;
  var cssProperty = 'fill';

  if (currentElement === SetupNodes.WIZARD_EYES) {
    color = window.util.getRandomElement(Color.EYES);
    SetupNodes.EYES_COLOR_INPUT.value = color;
  } else if (currentElement === SetupNodes.FIREBALL) {
    color =  window.util.getRandomElement(Color.FIREBALL);
    cssProperty = 'background';
    SetupNodes.FIREBALL_COLOR_INPUT.value = color;
  } else if (currentElement === SetupNodes.WIZARD_COAT) {
    color =  window.util.getRandomElement(Color.COAT);
    SetupNodes.COAT_COLOR_INPUT.value = color;
  }

  changeElementColor(currentElement, cssProperty, color);
};

SetupNodes.WIZARD_COAT.addEventListener('click', onChangeColorClick);
SetupNodes.WIZARD_EYES.addEventListener('click', onChangeColorClick);
SetupNodes.FIREBALL.addEventListener('click', onChangeColorClick);

Nodes.SIMILAR_LIST_ELEMENT.appendChild(addCharactersToList(createCharacters(NUMBER_CHARACTERS)));
Nodes.SETUP_WINDOW.querySelector('.setup-similar').classList.remove('hidden');
