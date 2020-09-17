// d.js
// b调用a.js中的add函数，引入单个文件中的多个函数

const {add, mutilply} = require('./c')
const sum = add(5, 4)
const mutil = mutilply(5, 4)

console.log(sum)
console.log(mutil)