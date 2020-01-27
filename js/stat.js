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
var NAME_GAP = 5;
var NAME_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getBarColor = function (player, i) {
  var saturation = 20 * i;

  if  (saturation > 100) {
    saturation = Math.floor(Math.random() * 100);
  }

  var barColor = 'hsl(240,' + 20 * i + '%, 50%)';

  if (player === 'Вы') {
     barColor = MY_BAR_COLOR;
  }

  return barColor;
};

var getResultY = function (multiplier, height) {
  return CLOUD_HEIGHT - NAME_GAP * multiplier - NAME_HEIGHT - height;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  var maxTime = Math.max.apply(null, times);

  players.forEach(function (player, i) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var resultX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;
    var resultYBar = getResultY(1, barHeight);
    var resultYTime = getResultY(2, barHeight);;

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(player, resultX, CLOUD_HEIGHT - NAME_GAP);
    ctx.fillText(Math.floor(times[i]), resultX, resultYTime);
    ctx.fillStyle = getBarColor(player, i);
    ctx.fillRect(resultX, resultYBar, BAR_WIDTH, barHeight);
  });

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText('Ура вы победили!', FINAL_TEXT_X, FINAL_TEXT_Y);
  ctx.fillText('Список результатов: ', FINAL_TEXT_X, FINAL_TEXT_Y + FINAL_TEXT_GAP);
};
