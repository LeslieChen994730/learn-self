(function() {
  //封装DOM操作方法
  let getEl = {
    //获取元素
    getEl_singe: function(selector, el = document) {
      return el.querySelector(selector);
    },

    getEl_all: function(selector, el = document) {
      return Array.from(el.querySelectorAll(selector));
    },

    //获取元素类名
    getEl_class(element) {
      return element.classList;
    },

    //添加元素类名
    add_class(element, className) {
      if (element.classList.contains(className)) {
        return;
      } else {
        element.classList.add(className);
      }
    },

    //添加所有元素类名
    add_all_class(arr, className) {
      for (let i in arr) {
        // let el=getEl.get arr[i]
        if (arr[i].classList.contains(className)) {
          return;
        } else {
          arr[i].classList.add(className);
        }
      }
    },

    //删除元素某个类名
    del_class(element, className) {
      element.classList.remove(className);
    },

    //删除多个元素某个类名
    del_all_class(arr, className) {
      for (let i in arr) {
        arr[i].classList.remove(className);
      }
    }
  };

  //动画元素对象
  let animationObj = {
    'screen-1': [
      '.header-nav',
      '.header-content-title-line1',
      '.header-content-title-line2'
    ],
    'screen-1-scroll': [
      '.header-content-title-line1',
      '.header-content-title-line2'
    ],
    'screen-2': [
      '.secondPage-title',
      '.secondPage-subtitle-1',
      '.secondPage-subtitle-2',
      '.secondPage-bg1',
      '.secondPage-bg2',
      '.secondPage-line'
    ],
    'screen-3': [
      '.thirdPage-left',
      '.thirdPage-right-subTitle-1',
      '.thirdPage-right-subTitle-2',
      '.thirdPage-right-title',
      '.thirdPage-line',
      '.thirdPage-bottom-colorDots'
    ],
    'screen-4': [
      '.fourth-img',
      '.fourthPage-line',
      '.fourth-subtitle',
      '.fourthPage-title'
    ],
    'screen-5': [
      '.five-screen-img',
      '.five-screen-title',
      '.five-screen-subTitle',
      '.five-screen-line'
    ]
  };

  //封装animation动画方法
  let animationMethods = {
    //全局起始状态
    animation_init: function(obj) {
      for (let i in obj) {
        this.animation_start(i);
      }
    },

    //每屏起始状态(添加-start)
    animation_start: function(screenPage) {
      let list = animationObj[screenPage];
      for (let k in list) {
        let start = list[k].substr(1) + '-start';
        let end = list[k].substr(1) + '-end';

        let el = getEl.getEl_singe(list[k]);
        getEl.del_class(el, end);
        getEl.add_class(el, start);
      }
    },

    //每屏完成时状态（改为-end）
    animation_end: function(screenPage) {
      let list = animationObj[screenPage];
      for (let k in list) {
        let start = list[k].substr(1) + '-start';
        let end = list[k].substr(1) + '-end';

        let el = getEl.getEl_singe(list[k]);
        getEl.del_class(el, start);
        getEl.add_class(el, end);
      }
    },

    //滚屏加载
    animation_scroll: function(top) {
      let keysList = Object.keys(animationObj);
      // console.log(keysList);

      if (top > 100) {
        getEl.add_class(getEl.getEl_singe('.header-nav'), 'header-nav-scroll');
        getEl.add_all_class(
          getEl.getEl_all('.nav-list-item-link'),
          'nav-list-item-scroll'
        );
      } else {
        getEl.del_class(getEl.getEl_singe('.header-nav'), 'header-nav-scroll');

        getEl.del_all_class(
          getEl.getEl_all('.nav-list-item-link'),
          'nav-list-item-scroll'
        );

        switchMethods.switchdouble(0);
      }

      if (top > 640) {
        this.animation_start(keysList[1]);
        getEl.add_class(
          getEl.getEl_singe('.bottom-aside'),
          'bottom-aside-show'
        );
      } else {
        this.animation_end(keysList[1]);
        getEl.del_class(
          getEl.getEl_singe('.bottom-aside'),
          'bottom-aside-show'
        );
      }

      if (top > 320 * 1 && top < 640 * 2) {
        this.animation_end(keysList[2]);
        switchMethods.switchdouble(1);
      } else {
        this.animation_start(keysList[2]);
      }

      if (top > 900 && top < 640 * 3) {
        this.animation_end(keysList[3]);
        switchMethods.switchdouble(2);
      } else {
        this.animation_start(keysList[3]);
      }

      if (top > 1600 && top < 640 * 4) {
        this.animation_end(keysList[4]);
        switchMethods.switchdouble(3);
      } else {
        this.animation_start(keysList[4]);
      }

      if (top > 2200) {
        this.animation_end(keysList[5]);
        switchMethods.switchdouble(4);
      } else {
        this.animation_start(keysList[5]);
      }
    }
  };

  //联动方法
  let switchMethods = {
    //moveTo点击跳转(添加颜色)
    moveTo: function(index, items, className) {
      let el = items[index];
      el.addEventListener(
        'click',
        () => {
          document.documentElement.scrollTop = 640 * index;

          getEl.del_all_class(items, className);
          getEl.add_class(el, className);
        },
        false
      );
    },

    //双向绑定
    //switchUnderline
    switchUnderline: function(index, items, className) {
      let nav_underline = getEl.getEl_singe('.header__nav-tip');
      let el = items[index];
      let currentIdx = 0;

      el.addEventListener(
        'mouseover',
        () => {
          nav_underline.style.left = 100 * index + 'px';

          getEl.del_all_class(items, className);
          getEl.add_class(el, className);
        },
        false
      );

      el.addEventListener(
        'mouseout',
        () => {
          for (let i in items) {
            if (items[i].classList.contains('nav-list-item-click-active')) {
              currentIdx = i;
              break;
            }
          }
          nav_underline.style.left = 100 * currentIdx + 'px';
          getEl.del_all_class(items, className);
        },
        false
      );
    },

    //联动
    switchdouble: function(index) {
      let navItems = getEl.getEl_all('.nav-list-item-link');
      let asideItems = getEl.getEl_all('.bottom-aside > span');
      let nav_underline = getEl.getEl_singe('.header__nav-tip');

      //初始化
      getEl.del_all_class(navItems, 'nav-list-item-click-active');
      getEl.del_all_class(asideItems, 'bottom-aside-active');
      nav_underline.style.left = 0;

      getEl.add_class(navItems[index], 'nav-list-item-click-active');
      getEl.add_class(asideItems[index], 'bottom-aside-active');
      nav_underline.style.left = 100 * index + 'px';
    }
  };

  //初始化
  const init = () => {
    animationMethods.animation_init(animationObj);

    //第一屏
    setTimeout(function() {
      animationMethods.animation_end('screen-1');
    }, 200);

    // 其他屏滚动加载
    window.onscroll = function() {
      let top = document.documentElement.scrollTop;
      animationMethods.animation_scroll(top);
    };

    //点击跳转
    let navItems = getEl.getEl_all('.nav-list-item-link');
    let asideItems = getEl.getEl_all('.bottom-aside > span');
    for (let i in navItems) {
      switchMethods.moveTo(i, navItems, 'nav-list-item-click-active');
    }
    for (let k in asideItems) {
      switchMethods.moveTo(k, asideItems);
    }

    //悬浮滑动
    for (let i in navItems) {
      switchMethods.switchUnderline(
        i,
        navItems,
        'nav-list-item-mouseover-active'
      );
    }
  };

  init();
})();
