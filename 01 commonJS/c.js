// 不同文件之间调用，导出多个功能函数

function add(a, b ){
	return a + b
}

function mutilply(a, b){
	return a * b
}

module.exports = {
	add,
	mutilply
}
