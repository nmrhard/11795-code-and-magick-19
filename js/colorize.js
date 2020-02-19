'use strict';

window.colorize = (function () {
  var Color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var character = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var changeElementColor = function (element, cssProperty, color) {
    element.setAttribute('style', cssProperty + ': ' + color);
  };

  var onEyesColorClick = function (evt) {
    var color = window.util.getRandomElement(Color.EYES);
    changeElementColor(evt.currentTarget, 'fill', color);
    character.onEyesChange(color);
    window.nodes.SetupNode.EYES_COLOR_INPUT.value = color;
  };

  var onCoatColorClick = function (evt) {
    var color = window.util.getRandomElement(Color.COAT);
    changeElementColor(evt.currentTarget, 'fill', color);
    character.onCoatChange(color);
    window.nodes.SetupNode.COAT_COLOR_INPUT.value = color;
  };

  var onFireballColorClick = function (evt) {
    var color = window.util.getRandomElement(Color.FIREBALL);
    changeElementColor(evt.currentTarget, 'background', color);
    window.nodes.SetupNode.FIREBALL_COLOR_INPUT.value = color;
  };

  return {
    onEyesColorClick: onEyesColorClick,
    onCoatColorClick: onCoatColorClick,
    onFireballColorClick: onFireballColorClick,
    character: character
  };
})();
