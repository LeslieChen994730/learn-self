// 1. 对图片进行分类
// 2. 生成dom元素
// 3. 绑定事件
// 4. 显示到页面

(function(window, document) {
  //判断动画是否走完,能否进行切换
  let canChange = true;
  //初始前进按钮的图片的索引
  let curPreviewImgIndex = 0;

  //dom操作方法,对象存储
  const methods = {
    //插入节点方法
    appendChild(parent, ...children) {
      children.forEach(el => {
        parent.appendChild(el);
      });
    },

    //单选择器返回dom节点
    $(selector, root = document) {
      return root.querySelector(selector);
    },

    //多选择器返回dom节点,数组
    $$(selector, root = document) {
      return root.querySelectorAll(selector);
    }
  };

  //创建Img函数
  let Img = function(options) {
    this._init(options);
    this._createElement(options);
    this._bind();
    this._show();
  };

  //初始化
  Img.prototype._init = function({ data, initType, parasitifer }) {
    this.types = ['全部']; //所有到分类
    this.all = []; //所有图片元素
    this.classified = {
      全部: []
    }; //按照类型分类后的图片
    this.curType = initType; //显示当前的图片分类
    this.parasitifer = methods.$(parasitifer); //要挂载的dom元素
    //对data进行分类
    this._classify(data);
    this.imgContainer = null; //所有图片的容器
    this.wrap = null; //整体容器
    this.typeBtnEls = null; //整体按钮数组
    this.figures = null; //整体当前显示的图片数组
    // this.previewImg=null;
    console.log(this.classified);
  };

  //图片分类方法
  Img.prototype._classify = function(data) {
    let srcs = [];
    //判断data的type类型是否在所有分类中存在
    data.forEach(({ title, type, alt, src }) => {
      if (!this.types.includes(type)) {
        this.types.push(type);
      }

      //判断data的type类型是否在按类型分类中存在
      if (!Object.keys(this.classified).includes(type)) {
        this.classified[type] = [];
      }

      if (!srcs.includes(src)) {
        //图片没有生成过
        //生成图片,添加到对应的类中
        srcs.push(src);
        let figure = document.createElement('figure');
        let Img = document.createElement('Img');
        let figcaption = document.createElement('figcaption');

        //节点赋值
        Img.src = src;
        Img.setAttribute('alt', alt);
        figcaption.innerText = title;

        //method方法插入
        methods.appendChild(figure, Img, figcaption);
        //新生成的图片添加到所有图片元素的数组中
        this.all.push(figure);
        //新生成的图片添加到对应的分类中
        this.classified[type].push(this.all.length - 1);
      } else {
        //去all中,找到对应的图片
        //添加到对应的分类中
        this.classified[type].push(srcs.findIndex(s1 => s1 === src));
      }
    });
  };

  //取图片的方法
  Img.prototype._getImgsByType = function(type) {
    return type === '全部'
      ? [...this.all]
      : this.classified[type].map(index => this.all[index]);
  };

  //生成DOM元素
  Img.prototype._createElement = function() {
    //创建分类按钮
    let typesBtn = [];
    for (let type of this.types.values()) {
      typesBtn.push(`
      <li class="__Img__classify__type-btn ${
        type === this.curType ? '__Img__type-btn-active' : ''
      }">${type}</li>
      `);
    }

    //整体的模板(按钮)
    let templete = ` <ul class="__Img__classify">
                          ${typesBtn.join('')}
                      </ul>
                      <div class="__Img__img-container"></div>`;

    //外面父容器设置
    let wrap = document.createElement('div');
    wrap.className = '__Img__container';
    wrap.innerHTML = templete;
    //figure图片容器
    this.imgContainer = methods.$('.__Img__img-container', wrap);
    methods.appendChild(
      this.imgContainer,
      ...this._getImgsByType(this.curType)
    );

    this.wrap = wrap;
    this.typeBtnEls = [...methods.$$('.__Img__classify__type-btn', wrap)];
    this.figures = [...methods.$$('figure', wrap)];

    //遮罩层
    let overlay = document.createElement('div');
    overlay.className = '__Img__overlay';
    overlay.innerHTML = `<div class="__Img__overlay-prev-btn"></div>
                         <div class="__Img__overlay-next-btn"></div>
                         <img src="" alt="">`;
    this.overlay = overlay;
    methods.appendChild(this.wrap, overlay);

    //上一张,下一张图片
    this.previewImg = methods.$('img', overlay);

    //调用计算图片位置方法
    this._calcPosition(this.figures);
  };

  //diff方法
  Img.prototype._diff = function(previewImgs, nextImgs) {
    let diffArr = [];

    previewImgs.forEach((src1, index1) => {
      let index2 = nextImgs.findIndex(src2 => src1 === src2);
      if (index2 != -1) {
        diffArr.push([index1, index2]);
      }
    });
    return diffArr;
  };

  //绑定事件
  Img.prototype._bind = function() {
    //点击按钮切换图片,代理到ul
    methods
      .$('.__Img__classify', this.wrap)
      .addEventListener('click', ({ target }) => {
        if (target.nodeName != 'LI') return;
        if (!canChange) return;
        canChange = false;
        const type = target.innerText;
        const els = this._getImgsByType(type);
        let previewImgs = this.figures.map(
          figure => methods.$('img', figure).src
        );
        let nextImgs = els.map(figure => methods.$('img', figure).src);

        //判断两个数组是否有相同的
        const diffArr = this._diff(previewImgs, nextImgs);
        // console.log(diffArr);
        diffArr.forEach(([, i2]) => {
          this.figures.every((figure, index) => {
            let src = methods.$('img', figure).src;

            if (src === nextImgs[i2]) {
              this.figures.splice(index, 1);
              return false;
            }
            return true;
          });
        });

        //重新计算位置
        this._calcPosition(els);

        let needAppendEls = [];
        if (diffArr.length) {
          let nextElsIndex = diffArr.map(([, i2]) => i2);
          els.forEach((figure, index) => {
            if (!nextElsIndex.includes(index)) {
              needAppendEls.push(figure);
            }
          });
        } else {
          needAppendEls = els;
        }

        //遍历隐藏
        this.figures.forEach(el => {
          el.style.transform = 'scale(0,0) translate(0,100%)';
          el.style.opacity = '0';
        });

        methods.appendChild(this.imgContainer, ...needAppendEls);
        setTimeout(() => {
          els.forEach(figure => {
            figure.style.transform = 'scale(1,1) translate(0,0)';
            figure.style.opacity = '1';
          });
        });

        //销毁
        setTimeout(() => {
          this.figures.forEach(figure => {
            this.imgContainer.removeChild(figure);
          });
          this.figures = els;
          canChange = true;
        }, 600);

        //按钮样式点击切换
        this.typeBtnEls.forEach(btn => {
          btn.className = '__Img__classify__type-btn';
        });
        target.className = '__Img__classify__type-btn __Img__type-btn-active';
      });

    //绑定事件在图片容器(预览效果)
    this.imgContainer.addEventListener('click', ({ target }) => {
      if (target.nodeName !== 'FIGURE' && target.nodeName !== 'FIGCAPTION')
        return;

      //替换成父节点
      if (target.nodeName === 'FIGCAPTION') {
        target = target.parentNode;
      }

      const src = methods.$('img', target).src;
      curPreviewImgIndex = this.figures.findIndex(
        figure => src === methods.$('img', figure).src
      );
      this.previewImg.src = src;
      this.overlay.style.display = 'flex';
      setTimeout(() => {
        this.overlay.style.opacity = '1';
      });
    });

    //遮罩层点击消失(透明度(过度动画),显示属性)
    this.overlay.addEventListener('click', () => {
      this.overlay.style.opacity = '0';

      setTimeout(() => {
        this.overlay.style.display = 'none';
      }, 300);
    });

    //prev按钮事件
    methods
      .$('.__Img__overlay-prev-btn', this.overlay)
      .addEventListener('click', e => {
        //组织事件冒泡
        e.stopPropagation();
        curPreviewImgIndex =
          curPreviewImgIndex === 0
            ? this.figures.length - 1
            : --curPreviewImgIndex;
        this.previewImg.src = methods.$(
          'img',
          this.figures[curPreviewImgIndex]
        ).src;
      });

    //next按钮事件
    methods
      .$('.__Img__overlay-next-btn', this.overlay)
      .addEventListener('click', e => {
        //组织事件冒泡
        e.stopPropagation();
        curPreviewImgIndex =
          curPreviewImgIndex === this.figures.length - 1
            ? 0
            : ++curPreviewImgIndex;
        this.previewImg.src = methods.$(
          'img',
          this.figures[curPreviewImgIndex]
        ).src;
      });
  };

  //显示元素
  Img.prototype._show = function() {
    methods.appendChild(this.parasitifer, this.wrap);
    //延时模拟进场动画
    setTimeout(() => {
      this.figures.forEach(figure => {
        figure.style.transform = 'scale(1,1) translate(0,0)';
        figure.style.opacity = '1';
      });
    });
  };

  //计算每张图片的top和left值
  Img.prototype._calcPosition = function(figures) {
    // let horizontalImgIndex = 0;

    figures.forEach((figure, index) => {
      figure.style.transform = 'scale(0,0) translate(0,-100%)';
      figure.style.top =
        parseInt(index / 4) * 140 + parseInt(index / 4) * 30 + 'px';
      figure.style.left = (index % 4) * 240 + (index % 4) * 30 + 'px';
    });

    //计算容器高度,解决因为绝对定位造成的父容器元素高度塌陷问题
    let len = Math.ceil(figures.length / 4);
    this.imgContainer.style.height = len * 140 + (len - 1) * 30 + 'px';
  };
  
  window.$Img = Img;
})(window, document);
