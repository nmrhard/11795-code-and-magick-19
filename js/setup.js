'use strict';

var FIRST_NAME = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var LAST_NAME = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COAT_COLOR = ['rgb (101, 137, 164)','rgb (241, 43, 107)','rgb (146, 100, 161)','rgb (56, 159, 117)','rgb (215, 210, 55)','rgb (0, 0, 0)'];
var EYES_COLOR = ['black','red','blue','yellow','green'];
var NUMBER_CHARACTERS = 4;
var characters = [];

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var getRandomElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var generateCharacter = function () {
  var _firstName = getRandomElement(FIRST_NAME);
  var _lastName = getRandomElement(LAST_NAME);
  var _coatColor = getRandomElement(COAT_COLOR);
  var _eyesColor = getRandomElement(EYES_COLOR);

  var character = {
    name: _firstName + ' ' + _lastName,
    coatColor: _coatColor,
    eyesColor: _eyesColor
  };

  return character;
}

for (var i = 0; i < NUMBER_CHARACTERS; i++) {
  var character = generateCharacter();
  characters.push(character);
}


