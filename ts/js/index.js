// var str = 'str1'
// var str1 = 1111
// var flag = true
// var arr = [1, 2, 3, 4, 5]
// var arr1 = ['ts', 3, true]
// var obj = {}
// var color
// ;(function (color) {
//   color[(color['red'] = 2)] = 'red'
//   color[(color['green'] = 3)] = 'green'
//   color[(color['blue'] = 6)] = 'blue'
// })(color || (color = {}))
// var c = color.blue
// var x
// var y
// //正确
// x = (function () {})()
// console.log(c)
// console.log(str)
// console.log(str1)
// console.log(flag)
// console.log(arr)
// console.log(arr1)

// // function forEach(obj, fn) {
// //   if (obj instanceof Array) {
// //     obj.forEach((value, index) => {
// //       fn(index, value)
// //     })
// //   } else if (obj instanceof Object) {
// //     for (let key in obj) {
// //       if (obj.hasOwnProperty(key)) {
// //         fn(key, obj[key])
// //       }
// //     }
// //   }
// // }

// // forEach({ chen: 1, zu: 2, rong: 3 }, function (index, value) {
// //   console.log(index , value)
// // })

// //防抖
// // function debounce(fn, delay,...args) {
// //   let timer = null
// //   return function () {
// //     if (timer) clearTimeout(timer)
// //     timer = setTimeout(() => {
// //       fn.call(this, ...args)
// //     }, delay)
// //   }
// // }

// // let btn = document.querySelector('.btn')
// // btn.onclick = debounce(function (index) {
// //   console.log(index)
// // }, 1000,2000)

// // //节流
// // function throttle(fn, time,...args) {
// //   let timer = null
// //   return function () {
// //     if (!timer) {
// //       timer = setTimeout(() => {
// //         fn.call(this, ...args)
// //         timer = null
// //       }, time)
// //     }
// //   }
// // }

// let a = document.querySelectorAll('.btn')
// // console.log(a)

// // console.log([1,2,3,4])

// let arr10 = [1, 2, 43, 4, 5, 6]
// console.log(Array.prototype.splice.call(arr10, 0, 1, '200'))
// console.log(arr10)

// // let z = 1
// // let b = '1'
// // console.log(z == b)

// // var name = 'The Window'

// // var object = {
// //   name: 'My Object',

// //   getNameFunc: function () {
// //     return function () {
// //       return this.name
// //     }
// //   },
// // }

// // console.log(object.getNameFunc()())

// var name = 'The Window'

// var object = {
//   name: 'My Object',

//   getNameFunc: function () {
//     return () => this.name
//   },
// }

// alert(object.getNameFunc()())

// var a = typeof 3+4
// console.log(a)

// console.log(a);
// var a = 1;
// console.log(b);

//
//
// var a = 1, b = 2, c = 3;
// var val = typeof a + b || c >0
// console.log(val)
// var d = 5;
// var data = d ==5 && console.log('bb')
// console.log(data)
// var data2 = d = 0 || console.log('haha')
// console.log(data2)
// var x = !!"Hello" + (!"world", !!"from here!!");
// console.log(x)
// var a = 1;
// var b = 3;
// console.log( a+++b );

// console.log(1+1);
// console.log("2"+"4");
// console.log(2+"4");
// console.log(+"4");

// sayName("world");
// sayAge(10);
// function sayName(name) {
//   console.log("hello ", name);
// }
// var sayAge = function(age) {
//   console.log(age);
// };

// function sumAquares() {
//   let arr = Array.from(arguments)
//   // console.log(Object.prototype.toString.call(arr[1]).indexOf('Number'));
//   let isNumber = arr.every((item) => {
//     return Object.prototype.toString.call(item).indexOf('Number') >= 0
//       ? true
//       : false
//   })

//   if (arr.length === 0) {
//     throw new Error('arguments is empty!')
//   }

//   if (!isNumber) {
//     throw new Error('arguments is not all number!')
//   }

//   let total = arr.reduce((pre, cur) => {
//     return pre + cur * cur
//   })

//   return total
// }

// console.log(sumAquares(0, 4, 6))
// var a = 2
// if(a = '') {
//   console.log("a 等于 1")
// }else {
//   console.log("a 不等于 1")
// }

// var d = (a = 3, b = 4)
// console.log(d)

// var a = 1
// function fn1() {
//   function fn3() {
//    return function fn2() {
//       console.log(a)
//     }
//     fn2()
//     var a = 4
//   }
//   var a = 2
//   return fn3
// }
// var fn = fn1()
// fn()()// ？

// var obj1 = {a:1, b:2};
//     var obj2 = {a:1, b:2};
//     console.log(obj1 == obj2);
//     console.log(obj1 = obj2);
//     console.log(obj1 == obj2);

function num(n) {
  return n <= 1
    ? n === 1
      ? 1
      : n === 0
      ? 0
      : new Error('n必须为大于等于0的整数')
    : num(n - 1) + n
}

console.log(num(-1))

