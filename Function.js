/*ES6函数*/
function show({x = 0, y = 0}) {
    console.log(x, y);
}

/*1.函数叁数默认已经定义了，不能再使用let，const声明*/
/*show({y:1});*/

/*2.扩展运算符...,reset运算符*/
let arr = ['apple', 'banana', 'orange'];
/*console.log(...arr);返回:apple banana orange*/

/*3.扩展运算符运用*/
function showArr(a, b, c) {
    console.log(a, b, c);
}

/*showArr(...[1,4,5]);*/

/*reset运算符:放在最后*/
function show3(a, b, ...c) {
    console.log(a, b);
    console.log(c);
}

/*show3(1,2,3,4,5,6,6);*/
let json = {
    a: 1,
    b: 2,
    c: 3
};
let arr23 = [1, 2, 3, 4, 5];
let arr34 = [...arr23];
/*复制一份*/

/*箭头函数:不会改变this*/
let show5 = (a, d) => {
    return a + d;
};



