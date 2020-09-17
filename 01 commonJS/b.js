// b调用a.js中的add函数，引入单个文件中的单函数

const add = require('./a')
const sum = add(5, 4)

console.log(sum)