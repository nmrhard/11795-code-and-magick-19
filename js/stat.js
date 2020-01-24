var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FINAL_TEXT_X = 120;
var FINAL_TEXT_Y = 40;
var FINAL_TEXT_GAP = 20;
var BAR_X = 140;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var BAR_GAP = 50;
var NAME_GAP = 10;
var NAME_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxTime = function (times) {
  if (times.length === 0) {
    times[0] = 0;
  }

  var maxTime = times[0];

  for (var i = 1; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }

  return maxTime;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxTime(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - NAME_GAP);
    ctx.fillText(Math.floor(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - NAME_GAP * 2 - NAME_HEIGHT - barHeight);
    ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - NAME_GAP - NAME_HEIGHT - barHeight, BAR_WIDTH, barHeight);
  }

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', FINAL_TEXT_X, FINAL_TEXT_Y);
  ctx.fillText('Список результатов: ', FINAL_TEXT_X, FINAL_TEXT_Y + FINAL_TEXT_GAP);
};
