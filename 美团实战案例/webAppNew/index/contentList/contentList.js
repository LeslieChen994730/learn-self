(function() {
  // 商家插入模板
  var itemTmpl =
    '<div class="r-item-content">' +
    '<img class="item-img" src=$pic_url />' +
    '$brand' +
    '<div class="item-info-content">' +
    '<p class="item-title">$name</p>' +
    '<div class="item-desc clearfix">' +
    '<div class="item-score">$wm_poi_score</div>' +
    '<div class="item-count">月售$monthNum</div>' +
    '<div class="item-distance">&nbsp;$distance</div>' +
    '<div class="item-time">$mt_delivery_time&nbsp;|</div>' +
    '</div>' +
    '<div class="item-price">' +
    '<div class="item-pre-price">$min_price_tip</div>' +
    '</div>' +
    '<div class="item-others">' +
    '$others' +
    '</div>' +
    '</div>' +
    '</div>';
  var page = 0;
  var isLoading = false;

  // 分割数组
  function group(array, subGroupLength) {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
      newArray.push(array.slice(index, (index += subGroupLength)));
    }
    return newArray;
  }

  /**
   *    获取商家列表
   *    parm
   */
  function getList(url) {
    isLoading = true;
    $.get(url, function(data) {
      var list = data.data.poilist || [];
      var groupedArray = group(list, 3);
      initContentList(groupedArray[ page]);
      isLoading = false;
      page++;
      // console.log( groupedArray[ page]);
    });
  }

  /**
   *    获取商家活动
   *    parm
   */
  function getOthers(data) {
    var array = data.discounts2;
    var str = '';
    array.forEach(function(item, index, array) {
      var _str =
        '<div class="others-info">' +
        '<img src="$icon_url" class="others-tag"/>' +
        '<p class="others-content one-line">$info</p>' +
        '</div>';
      _str = _str
        .replace('$icon_url', item.icon_url)
        .replace('$info', item.info);
      str += _str;
    });
    return str;
  }

  /**
   *    渲染是否是新到热门标签
   *    parm
   */
  function getBrand(data) {
    if (data.brand_type) {
      return '<div class="brand brand-pin">品牌</div>';
    } else {
      return '<div class="brand brand-xin">新到</div>';
    }
  }

  /**
   *    渲染月售
   *    parm
   */
  function getMonthNum(data) {
    var num = data.month_sale_num;
    if (num > 999) {
      return '999+';
    }
    return num;
  }

  /**
   *    渲染列表数据
   *    parm
   */
  function initContentList(list) {
    list.forEach(function(item, index, arr) {
      var str = itemTmpl
        .replace('$pic_url', item.pic_url)
        .replace('$name', item.name)
        .replace('$distance', item.distance)
        .replace('$brand', getBrand(item))
        .replace('$monthNum', getMonthNum(item))
        .replace('$mt_delivery_time', item.mt_delivery_time)
        .replace('$min_price_tip', item.min_price_tip)
        .replace('$others', getOthers(item))
        .replace('$wm_poi_score', new StarScore(item.wm_poi_score).getStars());
      $('.list-wrap').append($(str));
    });
  }

  // 监听window的scroll事件
  function addEvent() {
    window.addEventListener('scroll', function() {
      var clientHeight = document.documentElement.clientHeight;
      var scrollHeight = document.body.scrollHeight;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // alert(scrollHeight);
      var proDis = 30;
      if (scrollTop + clientHeight + proDis >= scrollHeight) {
        // 最多3页滚动加载
          // 在发送Ajax请求时避免触发多次滚动加载
          if (isLoading) {
            return;
          }
          var aaa=getList('../json/homelist.json');
          //  console.log(aaa);
          if(aaa=undefined){
            $('.loading').text('加载完成');
          }
      }
    });
  }

  //   初始化函数
  function init() {
    getList('../json/homelist.json');
    addEvent();
  }

  init();
})();
