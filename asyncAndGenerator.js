/*1.Generator函数是需要调用next指令来运行异步的语句，async不需要调用next，直接像运行正常的函数那样运行就可以*/
/*2.语义化更明确，相比较于Generator的*和yield，async和await更明确。*/
/*3.yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）*/
/*4.async直接返回一个promise对象，可以用then和cache来处理。*/
/*5.函数声明*/
async function foo() {}
/*6.表达式声明*/
let bar = async function () {};
/*7.对象声明*/
let obj = {
    async bazfunction(){
    }
};
/*8.箭头函数声明*/
let fot = async() => { };
/*9.await后面是一个promise对象，如果不是，会转成一个resolve的promise对象*/
async function f() {
    return await 123;
}
f().then(function (a) {
    console.log(a);
});
/*10.await后面的promise对象，如果reject，则reject参数会被cache参数接收到，
写不写return都可以，并且reject下面的代码不会执行,如果想下面的代码执行，必须用try cache包住*/
async function a() {
    try{
        await Promise.reject('出错了！')//reject语句是不用return返回的
    }catch (e){
        return await Promise.resolve('请重新填写')//resolve语句是需要用return返回
    }
}
a().then(function () {
    console.log(err);
}).catch(function (err) {
    console.log(err);
});
/*11.上面的代码如果不用try cache包裹reject,则下面的代码不会执行，并且reject语句是不用return返回的，resolve语句是需要用return返回；*/

/*12.async错误处理常用写法*/

/*13.用try catch包住可能会出错的部分*/
async function myFunction() {
    try {
        await Promise.reject('出错了！')//reject语句是不用return返回的
    } catch (err) {
        return await Promise.resolve('请重新填写')//resolve语句是需要用return返回:提示
    }
}
/*14.另一种写法是对可能要出错的异步操作添加catch回调函数*/
async function myFunction() {
    await somethingThatReturnsAPromise().catch((err)=> {
        console.log(err);
    })
}

/*15.async 函数的实现原理*/
async function fn(){}
//等同于
function fn() {
    return spawn(function* () {

    })
}
function spawn(genF) {
    /****
     * 返回的是一个promise
     */
    return new Promise(function(resolve, reject) {
        var gen=genF(); //运行Generator这个方法；
        /***
         * 执行下一步的方法
         * @param fn 一个调用Generator方法的next方法
         */
        function step(fn) {
            //如果有错误，则直接返回，不执行下面的await
            try {
                var next=fn();
            }catch (e){
                return reject(e)
            }
            //如果下面没有yield语句，即Generator的done是true
            if(next.done){
                return resolve(next.value);
            }
            // 如果下面还有yield语句，resolve继续执行递归执行gen.next()，reject则抛出错误
            Promise.resolve(next.value).then((val)=>{
                step(function(){ return gen.next(val) } )
            }).catch((e)=>{
                step(function(){ return gen.throw(e) } )
            })
        }
        step(function () {
            return gen.next();
        })
    });
}























