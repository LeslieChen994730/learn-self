(function() {
  //   class A {
  //     //属性
  //     constructor({ name = 'chen', age = 18, height = 180 } = {}) {
  //       A.age += 1;
  //       this.name = name;
  //       this.age = age;
  //       this.height = height;
  //       //   this.say();
  //     }

  //     //方法
  //     say() {
  //       console.log(
  //         `我的名字是:${this.name},我今年${this.age}岁了,我的身高是${this.height}cm`
  //       );
  //     }

  //     static say() {
  //       return `我是静态方法!`;
  //     }
  //   }

  //   A.prototype.say = function() {
  //     return `我的名字是:${this.name},我今年${this.age}岁了,我的身高是${this.height}cm,我是来证明方法被重写了!`;
  //   };

  //   A.age = 20;//静态属性
  //   let b = new A();
  //   console.log(b);
  //   console.log(A.age);
  //   console.log(A.say());

  //   console.log(typeof A);
  //   console.log(A.__proto__);
  //   console.log('name' in A);
  //   console.log(A.hasOwnProperty('height'));

  //   //
  //   class Person {
  //     constructor() {
  //       this._name = '';
  //       this._age=18;
  //     }

  //     get name() {
  //       console.log('正在访问');
  //       return `我的名字是${this._name}`;
  //     }

  //     set name(val) {
  //       console.log('正在修改');
  //       this._name = val;
  //     }

  //     get age() {
  //         console.log('正在访问age');
  //         return `我的年龄是${this._age}`;
  //       }

  //       set age(val) {
  //         console.log('正在修改age');
  //         this._age = val;
  //       }

  //   }
  //   const person=new Person();
  //   person.age='chen';
  //   console.log(person.age);
  // let year = prompt('请输入年份');
  // class Age {
  //   constructor() {
  //     this._age = 18;
  //   }

  //   get age() {
  //     return `${this._age}岁`;
  //   }
  //   set age(year) {
  //     console.log(parseInt(year));
  //     if (1985 < parseInt(year) && parseInt(year) <= new Date().getFullYear()) {
  //       this._age = new Date().getFullYear() - year;
  //     } else {
  //       this._age = 18;
  //     }
  //   }
  // }

  // let age = new Age();
  // age.age = year;
  // alert(age.age);

  // const Person = class p {
  //   constructor() {
  //     console.log(new.target);
  //   }
  // };

  // const a = new Person();
  // console.log(Person.name);
  // function Constructor(fn, args) {
  //   var _this = new Object(fn.prototype);
  //   var res = fn.apply(_this, args);
  //   return res ? res : _this;
  // }

  // function Person(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }

  // Person.prototype.say = function() {
  //   console.log(`我叫${this.name}`);
  // };

  // var person = Constructor(Person, ['张三', 18]);
  // console.log(person);
  // person.say();
})();
