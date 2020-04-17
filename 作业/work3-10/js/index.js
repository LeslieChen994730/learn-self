(function () {
  // 方法对象
  const methods = {
    //获取元素
    getEl_singe: function (selector, el = document) {
      return el.querySelector(selector);
    },

    getEl_all: function (selector, el = document) {
      return Array.from(el.querySelectorAll(selector));
    },

    //悬浮方法
    toggle: function (el1, el2) {
      let flag = [];
      el1.onmouseenter = function () {
        this.classList.add('header-hover');
        el2.style.opacity = '1';
        el2.style.visibility = 'visible';
      };

      el2.onmouseenter = function () {
        flag[0] = true;
      };

      el2.onmouseleave = function () {
        el1.classList.remove('header-hover');
        this.style.opacity = '0';
        this.style.visibility = 'hidden';
        flag[0] = false;
      };

      el1.onmouseleave = function () {
        setTimeout(function () {
          if (!flag[0]) {
            el2.onmouseleave();
          }
        }, 200);
      };
    },

    //正则验证
    RegTest: function (el, [text1, text2, text3],reg=null) {
      let span = el.nextElementSibling;
      let arr = [];
      //let arr[0]=false;或者let flag=false;为什么无法重新赋值？却通过全局变量的方式可以？
      //获取密码值
      let confirm = methods.getEl_singe('#userPwd');
      //密码强度参数变量
      let title = methods.getEl_singe('.password-title');
      let range = methods.getEl_all('.form-range');

      el.onblur = function () {
        arr[0] = false;
        //确认密码
        if (this.id === 'confirmPwd') {
          if (this.value === '') {
            span.style.color = 'red';
            span.innerHTML = text1;
          } else if (this.value === confirm.value) {
            span.style.color = 'green';
            span.innerHTML = text3;
            arr[0] = true;
          } else {
            span.style.color = 'red';
            span.innerHTML = text2;
          }
        }

        //确认密码强度
        else if (this.id === 'userPwd') {
          let [reg1, reg2, reg3] = reg;

          if (this.value === '') {
            title.innerHTML = text1;
            range[1].classList.remove('orange');
            range[2].classList.remove('green');
          } else {
            title.innerHTML = '';
            if (reg1.exec(this.value)) {
              range[1].classList.remove('orange');
              range[2].classList.remove('green');
              arr[0] = true;
            } else if (reg2.exec(this.value)) {
              range[1].classList.add('orange');
              range[2].classList.remove('green');
              arr[0] = true;
            } else if (reg3.exec(this.value)) {
              range[2].classList.add('green');
              arr[0] = true;
            } else {
              title.innerHTML = text2;
              arr[0] = false;
            }
          }
        }

        //其他普通验证
        else {
          if (this.value === '') {
            span.style.color = 'red';
            span.innerHTML = text1;
          } else if (!reg.exec(this.value)) {
            span.style.color = 'red';
            span.innerHTML = text2;
          } else {
            span.style.color = 'green';
            span.innerHTML = text3;
            arr[0] = true;
          }
        }
      };
      return arr;
    },
  };

  //正则合集
  const reg_all = {
    userName: /^[a-zA-Z]\w{5,29}$/,
    userPwd: [
      /^[1-9]{6,20}$|^[a-zA-Z]{6,20}$|^\W{6,20}$/,
      /^[1-9|a-z]{6,20}$|^[\W|a-z]{6,20}$|^[\W|1-9]{6,20}$/,
      /\W[0-9a-zA-Z]*/,
    ],
    name: /^[\u4E00-\uFA29]{2,15}$|^[a-zA-Z]{3,30}$/,
    zj: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    phone: /^[1][3,4,5,7,8][0-9]{9}$/,
  };

  //提示语句合集
  const title_all = {
    userName: [
      '用户名不能为空!',
      "6-30位字母、数字或'_'，字母开头",
      '用户名输入正确!',
    ],
    userPwd: ['密码不能为空!', '6-20位字母、数字或符号'],
    confirmPwd: [
      '密码不能为空!',
      '两次密码输入不一致，请重新输入!',
      '两次输入一致!',
    ],
    name: [
      '姓名不能为空!',
      '姓名只能包含中文或者英文,且字符在3-30个之间！',
      '姓名输入正确!',
    ],
    zj: ['号码不能为空！', '请输入18位身份证号码!', '号码输入正确!'],
    email: ['邮箱不能为空！', '请输入正确的邮箱!', '邮箱格式正确!'],
    phone: [
      '手机号码不能为空!',
      '您输入的手机号码不是有效的格式!',
      '手机格式正确!',
    ],
  };

  //初始化函数
  function init() {
    //调用toggle
    methods.toggle(
      methods.getEl_singe('.header-right-my'),
      methods.getEl_singe('.header-right-title')
    );
    methods.toggle(
      methods.getEl_singe('.name-link'),
      methods.getEl_singe('.name-content')
    );

    //验证用户名
    let flag_userName = methods.RegTest(
      methods.getEl_singe('#userName'),
      title_all.userName,
      reg_all.userName
    );

    //验证姓名
    let flag_name = methods.RegTest(
      methods.getEl_singe('#name'),
      title_all.name,
      reg_all.name
    );

    //验证邮箱
    let flag_email = methods.RegTest(
      methods.getEl_singe('#email'),
      title_all.email,
      reg_all.email
    );

    //验证证件号
    let flag_zj = methods.RegTest(
      methods.getEl_singe('#zj'),
      title_all.zj,
      reg_all.zj
    );

    //验证手机号码
    let flag_phone = methods.RegTest(
      methods.getEl_singe('#phone'),
      title_all.phone,
      reg_all.phone
    );

    //验证密码
    let flag_confirmPwd = methods.RegTest(
      methods.getEl_singe('#confirmPwd'),
      title_all.confirmPwd
    );

    //验证密码强度
    let flag_userPwd = methods.RegTest(
      methods.getEl_singe('#userPwd'),
      title_all.userPwd,
      reg_all.userPwd
    );

    //绑定btn函数
    methods.getEl_singe('#btn').onclick = function () {
      let checked = methods.getEl_singe('#checkbox');
      if (
        flag_userName[0] &&
        flag_userPwd[0] &&
        flag_confirmPwd[0] &&
        flag_name[0] &&
        flag_zj[0] &&
        flag_email[0] &&
        flag_phone[0]
      ) {
        if (checked.checked) {
          return (window.location.href = 'https://www.imooc.com/');
        } else {
          alert('别忘了勾选单选框哦！');
        }
      } else {
        alert('你还有东西没填完哦！');
      }
    };
  }

  init();
})();
