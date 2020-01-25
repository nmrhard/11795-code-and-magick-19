'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = '#000';
var FINAL_TEXT_X = 120;
var FINAL_TEXT_Y = 40;
var FINAL_TEXT_GAP = 20;
var BAR_X = 140;
var BAR_WIDTH = 40;
var MY_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var MAX_BAR_HEIGHT = 150;
var BAR_GAP = 50;
var NAME_GAP = 10;
var NAME_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomBarColor = function () {
  return 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var resultX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], resultX, CLOUD_HEIGHT - NAME_GAP);
    ctx.fillText(Math.floor(times[i]), resultX, CLOUD_HEIGHT - NAME_GAP * 2 - NAME_HEIGHT - barHeight);
    ctx.fillStyle = getRandomBarColor();
    if (players[i] === 'Вы') {
      ctx.fillStyle = MY_BAR_COLOR;
    }
    ctx.fillRect(resultX, CLOUD_HEIGHT - NAME_GAP - NAME_HEIGHT - barHeight, BAR_WIDTH, barHeight);
  }

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText('Ура вы победили!', FINAL_TEXT_X, FINAL_TEXT_Y);
  ctx.fillText('Список результатов: ', FINAL_TEXT_X, FINAL_TEXT_Y + FINAL_TEXT_GAP);
};
