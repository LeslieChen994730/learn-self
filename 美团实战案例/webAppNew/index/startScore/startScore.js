(function() {
  //    商家得分模板字符串
  var itemTmpl = '<div class="star-score">$starstr</div>';

  function _getStars() {
    var _score = this.score.toString();
    var scoreArry = _score.split('.');
    //   满星
    var fullstar = parseInt(scoreArry[0]);
    //   半星
    var halfstar = parseInt(scoreArry[1]) >= 5 ? 1 : 0;
    //   0星
    var nullflstar = 5 - fullstar - halfstar;
    var starstr = '';

    //   for循环
    for (var i = 0; i < fullstar; i++) {
      starstr += '<div class="star fullstar"></div>';
    };
    for (var j = 0; j < halfstar; j++) {
      starstr += '<div class="star halfstar"></div>';
    };
    for (var k = 0; k < nullflstar; k++) {
      starstr += '<div class="star nullstar"></div>';
    };
    return itemTmpl.replace('$starstr',starstr);
  }

  window.StarScore = function(score) {
    this.score = score || '';
    this.getStars = _getStars;
  };
})();
