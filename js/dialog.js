'use strict';

(function () {
  var defaultCoords = {
    x: 0,
    y: 0
  };

  var onSetupEscKeyDown = function (evt) {
    window.util.isEscEvent(evt, closeSetup);
  };

  var onFormSubmit = function (evt) {
    window.backend.save(new FormData(window.nodes.setupNodes.SETUP_FORM), function () {
      window.nodes.SETUP_WINDOW.classList.add('hidden');
    }, window.util.errorHandler);
    evt.preventDefault();
  };

  var openSetup = function () {
    window.nodes.SETUP_WINDOW.classList.remove('hidden');
    defaultCoords.x = window.nodes.SETUP_WINDOW.offsetLeft;
    defaultCoords.y = window.nodes.SETUP_WINDOW.offsetTop;
    document.addEventListener('keydown', onSetupEscKeyDown);
  };

  var closeSetup = function () {
    window.nodes.SETUP_WINDOW.classList.add('hidden');
    window.nodes.SETUP_WINDOW.style.top = defaultCoords.y + 'px';
    window.nodes.SETUP_WINDOW.style.left = defaultCoords.x + 'px';
    document.removeEventListener('keydown', onSetupEscKeyDown);
  };

  window.nodes.SETUP_OPEN.addEventListener('click', function () {
    openSetup();
  });

  window.nodes.SETUP_OPEN.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  window.nodes.setupNodes.SETUP_CLOSE.addEventListener('click', function () {
    closeSetup();
  });

  window.nodes.setupNodes.SETUP_CLOSE.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  });

  window.nodes.setupNodes.SETUP_FORM.addEventListener('submit', onFormSubmit);
})();
