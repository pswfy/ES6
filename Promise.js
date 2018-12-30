/*Promise:异步:解决异步回调地狱*/
/*语法:*/
/*resolve:success*/
/*reject:error*/
let msg=10;
const promise1=new Promise(function(resolve,reject){
    if(msg===10){
        resolve("success");
    }else{
        reject("error");
    }
});
/*promise1.then(res=>{
    console.log(res);
},err=>{
    console.log(err)
}).catch(err=>{console.log("捕获错误")});*/

/*1.Promose.resolve("aa");*//*将现有的东西，转换成一个promise对象，而是resolve的状态*/
/*2.Promise.reject("aaa");*//*将现有的东西，转换成一个promise对象，而是reject的状态*/
let p1=Promise.resolve("aaa");
/*
p1.then(res=>{
    console.log(res);
});*/

/*3.Promise.all([p1,p2,p3]);:把Promise打包，还是一个Promise对象：&& 的感觉*/
/*all:特点:all,必须保证都是resolve,最后才是success的状态*/
let p2=Promise.resolve("pppp");
let p3=Promise.resolve("cccc");

Promise.all([p1,p2,p3]).then(res=> {
    let [name, age, sex] = res
});
/*4.Promise.race([p1,p2,p3]):只要有一是resolve，就是success状态,只返回找到的第一个成功的那个：||、或的感觉*/
Promise.race([p1,p2,p3]).then(res=> {
    console.log(res);
});