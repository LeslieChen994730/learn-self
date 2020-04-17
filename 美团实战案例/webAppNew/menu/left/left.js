(function() {
  //左侧类目item模板字符串
  var itemTmpl =
    '<div class="left-item">' +
    '<div class="item-text">$getItemContent</div>' +
    '</div>';

  /**
   * 获取json数据
   * @pramr {}
   */
  function getList() {
    $.get('../json/food.json', function(data) {
      console.log(data);
      var list=data.data.food_spu_tags || '';
      initContentList(list);
    });
  };

   /**
   * 渲染item内容
   * @pramr obj
   */
  function getItemContent(data) { 
        if (data.icon) {
            return '<img class="item-icon" src='+data.icon+'>'+data.name;
        }else{
            return data.name;
        }
   };

    /**
   * 渲染item列表
   * @pramr arr
   */
   function initContentList(list) { 
        list.forEach(function(item,index,arr){
            var str=itemTmpl.replace('$getItemContent',getItemContent(item))
            
            var $target=$(str);
            $target.data('itemData',item);
            $('.left-bar-inner').append($target);
        });
    };

  //初始化函数
  function init() {
    getList();
  }

  init();
})();
