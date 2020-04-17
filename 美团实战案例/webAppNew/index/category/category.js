(function() {
  // 末班字符串
  var itemTmpl =
    '<div class="category-item">' +
    '<img class="item-icon" src=$url />' +
    '<p class="item-name">$name</p>' +
    '</div>';

  
  /**
   * 渲染category元素
   * param
   */
  function initCategory() {
    //获取category数据
    $.get('../json/head.json', function(data) {
      // console.log(data);
      var list = data.data.primary_filter.splice(0, 8);
      list.forEach(function(item, index, arr) {
        var str = itemTmpl
          .replace('$url', item.url)
          .replace('$name', item.name);
        $('.category-content').append(str);
        // console.log(arr);
        // console.log(item);
      });
    });
  };

  /**
   * 绑定事件
   * param
   */
  function addClick(){
    $('.category-content').on('click','category-item',function(){

    });
  }
  //   初始化
  function init() {
    initCategory();
    addClick();
  };

  init();
})();
