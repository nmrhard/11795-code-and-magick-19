'use srtict';

(function () {
  var onSetupEscKeyDown = function (evt) {
    window.util.isEscEvent(evt, closeSetup);
  };

  var openSetup = function () {
    window.nodes.SETUP_WINDOW.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscKeyDown);
  };

  var closeSetup = function () {
    window.nodes.SETUP_WINDOW.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscKeyDown);
  };

  window.nodes.SETUP_OPEN.addEventListener('click', function () {
    openSetup();
  });

  window.nodes.SETUP_OPEN.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  window.setupNodes.SETUP_CLOSE.addEventListener('click', function () {
    closeSetup();
  });

  window.setupNodes.SETUP_CLOSE.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  });
})();
