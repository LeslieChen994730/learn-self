!(function () {
  function forEach(obj, fn) {
    //判断是否是数组
    if (obj instanceof Array) {
      obj.forEach(function (item, index) {
        fn(index, item);
      });
    } else {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          fn(key, obj[key]);
        }
      }
    }
  }

  forEach([1, 2, 3], function (index, item) {
    console.log(index, item);
  });

  forEach({ x: 100, y: 200 }, function (key, val) {
    console.log(key, val);
  });
})();
