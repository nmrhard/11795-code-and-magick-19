'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var Name = {
  FIRST: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  LAST: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};
var Color = {
  COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
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


// Close/open window setup

var onSetupEscKeyDown = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== SetupNodes.USER_NAME_INPUT) {
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

SetupNodes.SETUP_CLOSE.addEventListener('click', function () {
  closeSetup();
});

SetupNodes.SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetup();
  }
});

//Validate user name input

SetupNodes.USER_NAME_INPUT.addEventListener('invalid', function () {
  if (SetupNodes.USER_NAME_INPUT.validity.tooShort) {
    SetupNodes.USER_NAME_INPUT.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (SetupNodes.USER_NAME_INPUT.validity.tooLong) {
    SetupNodes.setCustomVilidity('Имя не должно превышать 25-ти символов');
  } else if (SetupNodes.USER_NAME_INPUT.validity.valueMissing) {
    SetupNodes.USER_NAME_INPUT.setCustomValidity('Обязательное поле');
  } else {
    SetupNodes.USER_NAME_INPUT.setCustomValidity('');
  }
});

//Change character

var changeElementColor = function (element, cssProperty, color) {
  element.setAttribute('style', cssProperty + ': ' + color);
}

SetupNodes.WIZARD_COAT.addEventListener('click', function (evt) {
  var color = getRandomElement(Color.COAT);
  changeElementColor(evt.currentTarget, 'fill', color);
  SetupNodes.COAT_COLOR_INPUT.value = color;
});

SetupNodes.WIZARD_EYES.addEventListener('click', function (evt) {
  var color = getRandomElement(Color.EYES);
  changeElementColor(evt.currentTarget, 'fill', color);
  SetupNodes.EYES_COLOR_INPUT.value = color;
});

SetupNodes.FIREBALL.addEventListener('click', function (evt) {
  var color = getRandomElement(Color.FIREBALL);
  changeElementColor(evt.currentTarget, 'background', color);
  SetupNodes.FIREBALL_COLOR_INPUT.value = color;
});

Nodes.SIMILAR_LIST_ELEMENT.appendChild(addCharactersToList(createCharacters(NUMBER_CHARACTERS)));
Nodes.SETUP_WINDOW.querySelector('.setup-similar').classList.remove('hidden');
