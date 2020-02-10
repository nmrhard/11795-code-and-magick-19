'use strict';

(function () {
  var Color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var onChangeColorClick = function (evt) {
    var color = '';
    var currentElement = evt.currentTarget;
    var cssProperty = 'fill';

    if (currentElement === window.setupNodes.WIZARD_EYES) {
      color = window.util.getRandomElement(Color.EYES);
      window.setupNodes.EYES_COLOR_INPUT.value = color;
    } else if (currentElement === window.setupNodes.FIREBALL) {
      color = window.util.getRandomElement(Color.FIREBALL);
      cssProperty = 'background';
      window.setupNodes.FIREBALL_COLOR_INPUT.value = color;
    } else if (currentElement === window.setupNodes.WIZARD_COAT) {
      color = window.util.getRandomElement(Color.COAT);
      window.setupNodes.COAT_COLOR_INPUT.value = color;
    }

    changeElementColor(currentElement, cssProperty, color);
  };

  var changeElementColor = function (element, cssProperty, color) {
    element.setAttribute('style', cssProperty + ': ' + color);
  };

  window.colorize = function (element) {
    element.addEventListener('click', onChangeColorClick);
  };
})();
