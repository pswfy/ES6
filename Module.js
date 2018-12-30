import {a as aa, b, cc} from './module/add.js';
/*模块化*/
/*1.Commonjs规范:Node.js*/
/*2.AMD规范:requireJs,curlJs*/
/*3.CMD规范:seaJs*/
/*4.ES6:统一了服务端和客户端的规范*/


/*模块化:定义模块，使用模块*/
/*1.引入模块*/
/*2.import:只会导入一次*/


/*console.log(aa, b, cc);*/


/*require: node 和 es6 都支持的引入:动态引入*/
/*export / import : 只有es6 支持的导出引入*/
/*module.exports / exports: 只有 node 支持的导出*/

/*Node里面的模块系统遵循的是CommonJS规范。*/

/*在一个node执行一个文件时，会给这个文件内生成一个 exports和module对象.而module又有一个exports属性。*/
/*exports = module.exports = {};*/

/*exports只辅助module.exports操作内存中的数据，辛辛苦苦各种操作数据完，累得要死，
结果到最后真正被require的内容还是module.exports的
尽量都用 module.exports 导出，然后用require导入*/

/*export与export default均可用于导出常量、函数、文件、模块等
在一个文件或模块中，export、import可以有多个，export default仅有一个
通过export方式导出，在导入时要加{ }，export default则不需要
export能直接导出变量表达式，export default不行。*/

/*1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。
 一个模块就是一个单例，或者说就是一个对象；
2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
3：模块内部的变量或者函数可以通过export导出；
4：一个模块可以导入别的模块*/

