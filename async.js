/*1.promise*/
/*2.generator*/
/*3.async*/
const fs = require("fs");

/*简单的封装promise*/
const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
};

/*
readFile("data/a.txt").then(res=>{
    console.log(res.toString());
    return readFile("data/b.txt");
}).then(res=>{
    console.log(res.toString());
    return readFile("data/c.txt");
}).then(res=>{
    console.log(res.toString());
});*/

/*简单的封装generator*/
/*function* gen() {
    yield readFile("data/a.txt");//Promise对象
    yield readFile("data/b.txt");//Promise对象
    yield readFile("data/c.txt");//Promise对象
}

/!*let [a,b,c]=gen();*!/
let g1 = gen();
g1.next().value.then(res => {
    console.log(res.toString());
    return g1.next().value;
}).then(res => {
    console.log(res.toString());
    return g1.next().value;
}).then(res => {
    console.log(res.toString());
});*/

/*3.async:异步的任务*/
/*4,async: await:后面的结果呀等待*/
/*5.比generator有更强的语义*/
/*6.async有异步的任务，返回的是Promise对象，如果全面有一个Promise的状态不成功(reject)，整个async就中断了*/
/*7.await:等待：后面可以是Promise对象，也可以是数组，boolean值等*/
async function fn(){
    let f1=await readFile("data/a.txt");
    let f2=await readFile("data/b.txt");
    let f3=await readFile("data/c.txt");

    console.log(f1.toString());
    console.log(f2.toString());
    console.log(f3.toString());
}
async function fn1(){
    try{
        await Promise.reject("出现问题了");
    }catch(e){

    }
   let a= await Promise.resolve("success");
    console.log(a);


}
/*fn1().then(res=>{
    /!*console.log(res);*!/
}).catch(err=>{
   /!* console.log(err);*!/
});*/

/*关于中断的解决*/
/*async/await 是一种编写异步代码的新方法。之前异步代码的方案是回调和 promise。*/
/*async/await 是建立在 promise 的基础上。*/
/*async/await 像 promise 一样，也是非阻塞的。*/
/*async/await 让异步代码看起来、表现起来更像同步代码。这正是其威力所在。*/

async function testAsync() {
    return "hello async";
}
let result = testAsync();
/*console.log(result);*/
// 从结果中可以看到async函数返回的是一个promise对象，
// 如果在函数中 return 一个直接量，async 会把这个直接量通过
// Promise.resolve() 封装成 Promise 对象。
/*从字面意思上看await就是等待，await 等待的是一个表达式，这个表达式的返回值可以是一个promise对象也可以是其他值。*/
/*很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。
await后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈（后面会详述）的代码。
等本轮事件循环执行完了之后又会跳回到async函数中等待await
后面表达式的返回值，如果返回值为非promise则继续执行async函数后面的代码，
否则将返回的promise放入promise队列（Promise的Job Queue）*/
function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

async function testAsync1() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}
async function test() {
    console.log("test start...");
    const v1 = await testSometing();//关键点1
    console.log(v1);
    const v2 = await testAsync1();
    console.log(v2);
    console.log(v1, v2);
}

/*test();
let promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});
promise.then((val)=> console.log(val));
console.log("test end...")*/
/*使用 async / await, 搭配 promise, 可以通过编写形似同步的代码来处理异步流程,*/
/*提高代码的简洁性和可读性.本文介绍 async / await 的基本用法和一些注意事项.*/
/*await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用.*/
/*[return_value] = await expression;*/
/*另外需要注意的是, await 在等待 Promise 对象时会导致 async function 暂停执行, 一直到 Promise 对象决议之后才会 async function 继续执行.*/
async function foo() {
    let a = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
    console.log(a); // 第2秒时输出: 1

    try {
        let b = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(2);
            }, 1000);
        })
    } catch (e) {
        console.log(e); // 第3秒时输出: 2
    }

    // 函数暂停2秒后再继续执行
    let sleep = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('sleep');
        }, 2000);
    });

    let c = await 3;
    console.log(c); // 第5秒时输出: 3
}
/*若在 async 函数中 return 了一个值 x, 不管 x 值是什么类型, async 函数的实际返回值总是 Promise.resolve(x).*/
/*foo();*/
async function showData() {
    // 假装请求数据1
    let data1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data1');
        }, 1000);
    });

    // 假装请求数据2且此请求依赖数据1
    let data2 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data2');
        }, 1000);
    });

    // 展示数据2
    console.log(data2);
}

/*showData();*/
/*async 函数返回的是一个promise 对象，如果要获取到promise 返回值，我们应该用then 方法*/
/*同步方法：调用时需要等待返回结果，才可以继续往下执行业务
异步方法：调用时无须等待返回结果，可以继续往下执行业务
开启新线程：在主线程之外开启一个新的线程去执行业务
同步方法和异步方法的本质区别： 调用时是否需要等待返回结果才能继续执行业务*/
