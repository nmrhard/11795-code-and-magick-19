'use strict';

(function () {
  var onDialogMouseDown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragges = false;

    var onMouseMove = function (mouseEvt) {
      mouseEvt.preventDefault();
      isDragges = true;

      var shift = {
        x: startCoords.x - mouseEvt.clientX,
        y: startCoords.y - mouseEvt.clientY
      };

      startCoords = {
        x: mouseEvt.clientX,
        y: mouseEvt.clientY
      };

      window.nodes.SETUP_WINDOW.style.top = window.nodes.SETUP_WINDOW.offsetTop - shift.y + 'px';
      window.nodes.SETUP_WINDOW.style.left = window.nodes.SETUP_WINDOW.offsetLeft - shift.x + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('moseup', onMouseUp);

      if (isDragges) {
        var onClickPreventDeafult = function (clickEvt) {
          clickEvt.preventDefault();
          window.setupNodes.DIALOG_HANDLER.removeEventListener('click', onClickPreventDeafult);
        };
        window.setupNodes.DIALOG_HANDLER.addEventListener('click', onClickPreventDeafult);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };
  window.setupNodes.DIALOG_HANDLER.addEventListener('mousedown', onDialogMouseDown);
})();
