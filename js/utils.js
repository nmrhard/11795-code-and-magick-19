'use strict';

window.util = (function () {
  var Key = {
    ESC: 'Escape',
    ENTER: 'Enter'
  };

  var getRandomElement = function (items) {
    return items[Math.floor(Math.random() * items.length)];
  };

  var isEscEvent = function (evt, action) {
    if (evt.key === Key.ESC && evt.target.tagName.toLowerCase() !== 'input') {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === Key.ENTER) {
      action()
    }
  }

  return {
    getRandomElement: getRandomElement,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent
  }
})();

