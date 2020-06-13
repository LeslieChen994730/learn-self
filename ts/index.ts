let str: string = 'str1'
let str1: number = 1111
let flag: boolean = true
let arr: number[] = [1, 2, 3, 4, 5]
let arr1: [string, number, boolean] = ['ts', 3, true]
let obj: object = {}

enum color {
  red = 2,
  green = 3,
  blue = 6,
}
let c: color = color.blue

let x: never
let y: number

//正确
// x = (function () {})()
console.log(c)
console.log(str)
console.log(str1)
console.log(flag)
console.log(arr)
console.log(arr1)

