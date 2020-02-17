'use strict';

(function () {
  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
    GAP: 10,
    COLOR: '#fff',
    SHADOW: 'rgba(0, 0, 0, 0.7)'
  };
  var TextStat = {
    FONT: '16px PT Mono',
    COLOR: '#000'
  };
  var FintalText = {
    X: 120,
    Y: 40,
    GAP: 20
  };
  var Bar = {
    X: 140,
    WIDTH: 40,
    GAP: 50
  };
  var Name = {
    GAP: 5,
    HEIGHT: 20
  };
  var MY_BAR_COLOR = 'rgba(255, 0, 0, 1)';
  var MAX_BAR_HEIGHT = 150;
  var STEP = 20;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
  };

  var getBarColor = function (player, i) {
    if (player === 'Вы') {
      return MY_BAR_COLOR;
    }

    var saturation = STEP * i;
    saturation = (saturation <= 100) ? STEP * i : Math.floor(Math.random() * 100);

    return 'hsl(240,' + saturation + '%, 50%)';
  };

  var getResultY = function (multiplier, height) {
    return Cloud.HEIGHT - Name.GAP * multiplier - Name.HEIGHT - height;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, Cloud.X + Cloud.GAP, Cloud.Y + Cloud.GAP, Cloud.SHADOW);
    renderCloud(ctx, Cloud.X, Cloud.Y, Cloud.COLOR);

    var maxTime = Math.max.apply(null, times);

    players.forEach(function (player, i) {
      var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
      var resultX = Bar.X + (Bar.WIDTH + Bar.GAP) * i;
      var resultYBar = getResultY(1, barHeight);
      var resultYTime = getResultY(2, barHeight);

      ctx.fillStyle = TextStat.COLOR;
      ctx.fillText(player, resultX, Cloud.HEIGHT - Name.GAP);
      ctx.fillText(Math.floor(times[i]), resultX, resultYTime);
      ctx.fillStyle = getBarColor(player, i);
      ctx.fillRect(resultX, resultYBar, Bar.WIDTH, barHeight);
    });

    ctx.fillStyle = TextStat.COLOR;
    ctx.font = TextStat.FONT;
    ctx.fillText('Ура вы победили!', FintalText.X, FintalText.Y);
    ctx.fillText('Список результатов: ', FintalText.X, FintalText.Y + FintalText.GAP);
  };
})();
