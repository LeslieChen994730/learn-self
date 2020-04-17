(function() {
  // function avg(...args) {
  //   let length = args.length;
  //   // let total=0;
  //   // //for of 方法
  //   // for(let i of args){
  //   //   total+=i;
  //   // }
  //   // return total/length;

  //   //reduce 方法
  //   let total = args.reduce(function(a, b) {
  //     return a + b;
  //   }, 0);
  //   return total / length;
  // }

  // console.log(avg(1, 3, 5, 7, 9));

  // function Push(arr, ...args) {
  //   let newArr = arr;
  //   // //第一种
  //   // for (let i of args) {
  //   //   newArr.push(i);
  //   // }

  //   //合并数组
  //   newArr=[...arr,...args];
  //   return newArr;
  // }
  // var arr = [];
  // console.log(Push(arr, 1, 2, 3));

  // function insert(value) {
  //   return {
  //     into: function(array) {
  //       return {
  //         after: function(afterValue) {
  //           array.splice(array.indexOf(afterValue) + 1, 0, value);
  //           return array;
  //         }
  //       };
  //     }
  //   };
  // }

  // var arr = insert(2)
  //   .into([1, 3])
  //   .after(1);
  // console.log(arr);
  // // 补充代码

  // let obj = (value) => ({
  //   into: (array) => ({
  //     after: (afterValue) => {
  //       array.splice(array.indexOf(afterValue) + 1, 0, value);
  //       return array;
  //     }
  //   })
  // });

  // var arr = obj(2)
  //   .into([1, 3])
  //   .after(1);
  // console.log(arr);

  // // let a=(...args)=>({b:1});
  // //   console.log(a());

  // function Person() {

  // }
  // var p = new Person()
  // console.log(Person.prototype); // Object{}
  // console.log(p.prototype); // undifined
  // console.log(p.constructor); //function Person(){}
  // // 此处的p是通过 Person函数构造出来的，所以p的constructor属性指向Person
  // console.log(Person.constructor); //function Function(){}
  // // 之前提过，每个函数其实是通过new Function（）构造的
  // console.log({}.constructor); // function Object(){}
  // // 每个对象都是通过new Object（）构造的
  // console.log(Object.constructor); // function Function() {}
  // // Object也是一个函数，它是Function（）构造的
  // console.log([].constructor);  //function Array(){}

  // function Person(){}
  // var person1=new Person();

  // console.log(person1.__proto__==Person.prototype);
  // console.log(person1.constructor==Person);
  // console.log(Person.__proto__);
  // console.log(Person.prototype.constructor==Person);
  // // console.log(person1.prototype.constructor==Person);
  // console.log(Person.prototype);

  // const arr=[1,2,3,4,5,6,999,null,false,'  '];
  // console.log(Math.max(...arr));

  // let arr = [];

  // for (let i = 0; i < 10; i++) {
  //   let suji = Math.floor(Math.random() * 101);
  //   arr.push(suji);
  // }

  // arr.sort(function(a,b){return b-a});
  // console.log(...arr);
  // console.log(`这组数组中的最大值是:${Math.max(...arr)}`);
  // console.log(`这组数组中的最小值是:${Math.min(...arr)}`);

  // let arrayLike={
  //   '0':'111',
  //   '1':'chen',
  //   '3':false,
  //   length:4
  // }

  // let arrayLike2=Array.from(arrayLike,x=>x*2);
  // console.log(arrayLike2);
  // console.log([1,2,3,4,5].indexOf(4,2));
  // console.log('fsdfsdfkgsfi'.indexOf('f',5));
  // let arr=[1,3,4,6,7,333];
  // for(let [i,v] of arr.entries()){
  //     console.log(i,v);
  // }

  // let CreateImg = url =>
  //   new Promise(resolve => {
  //     let img = document.createElement('img');
  //     img.src = url;
  //     document.body.appendChild(img);
  //     setTimeout(() => {
  //       resolve();
  //     }, 1000);
  //   });

  // CreateImg('http://climg.mukewang.com/5b16558d00011ed506000338.jpg')
  //   .then(
  //     () => console.log('第一次加载成功!'),
  //     CreateImg('http://climg.mukewang.com/5b165603000146ca06000338.jpg')
  //   )
  //   .then(
  //     () => console.log('第一次加载成功!'),
  //     CreateImg('http://climg.mukewang.com/5b1656140001c89906000338.jpg')
  //   )
  //   .then(() => console.log('第三次加载成功!'));

  // // var f=function (b){return b};
  // //     console.log(f(9999));

  // // let f=b=>b;
  // // console.log(f(9999));

  // // function(b) {return b ;}
  // // () => console.log('ffffffff')();
  // // (b => console.log(b))();
  // // function a(b) {return b; }
  // // let a=b=>b;
  // // console.log(a('gdgdgd'));

  function cook() {
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('做饭完毕！');
        resolve('鸡蛋炒饭');
      }, 1000);
    });
    return p;
  }

  function eat(data) {
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('吃饭完毕!');
        resolve('一块碗和一双筷子');
      }, 2000);
    });
    return p;
  }
  function wash(data) {
    console.log('开始洗碗：' + data);
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('洗碗完毕!');
        resolve('干净的碗筷');
      }, 2000);
    });
    return p;
  }
  //补充代码

  cook()
  .then(data=>eat(data))
  .then(data=>wash(data))
  .then(data=>console.log(data));

})();
