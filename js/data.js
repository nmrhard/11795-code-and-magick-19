'use strict';

window.data = (function () {
    var Name = {
    FIRST: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    LAST: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  };
  var Color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var mockItem = function () {
    return {
      name: window.util.getRandomElement(Name.FIRST) + ' ' + window.util.getRandomElement(Name.LAST),
      coatColor: window.util.getRandomElement(Color.COAT),
      eyesColor: window.util.getRandomElement(Color.EYES)
    };
  };

  var mock = function (count) {
    var characters = [];

    for (var i = 0; i < count; i++) {
      characters.push(mockItem());
    }

    return characters;
  };

  return {
    mock: mock
  }
})();
