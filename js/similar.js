'use strict';

window.similar = (function () {
  var coatColor;
  var eyesColor;
  var characters = [];

  var getRank = function (character) {
    var rank = 0;

    if (character.colorCoat === coatColor) {
      rank += 2;
    }
    if (character.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var nameComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateCharacter = function () {
    window.createCharacter.renderCharacters(characters.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = nameComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.colorize.character.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateCharacter();
  });

  window.colorize.character.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateCharacter();
  });

  var successHandler = function (data) {
    characters = data;
    updateCharacter();
  };

  return {
    successHandler: successHandler
  };
})();
