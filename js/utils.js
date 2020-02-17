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
      action();
    }
  };

  var errorHandler = function (errorMessage) {
    document.body.style = 'position: relative';
    var node = document.createElement('div');
    var spanElement = document.createElement('span');
    node.style = 'z-index: 100; display: flex; padding-top: 380px; color: #ffffff; background-color: rgba(0,0,0,0.8);';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.top = 0;
    node.style.width = '100%';
    node.style.height = '100%';
    node.style.fontSize = '50px';
    node.style.fontWeight = '700';

    spanElement.style = 'margin: 0 auto; color: #00000';
    spanElement.textContent = errorMessage;
    node.appendChild(spanElement);
    document.body.insertAdjacentElement('afterbegin', node);
  };

  return {
    getRandomElement: getRandomElement,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    errorHandler: errorHandler
  };
})();

