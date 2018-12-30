/*ES2015.6:ECMA6:ES6*/
/*关于定义变量*/
let age=24;
/*关于var:变量创建于赋值会分开也就是所谓的变量提升*/
/*关于let:有作用域:同一个代码块不能有重复的let变量*/
/*关于const:常量:*/
/*TDZ:暂时性死区*/
for(let i=0;i<5;i++){
    let i="abc";
    /*console.log(i);adb*/
}
/*console.log(i);error*/
let arr=[];
for(let i=0;i<5;i++){
    arr[i]=i;
}

const root="WfY";
/*const 必须有值,不能有空,不能改值:不能改的是内存地址*/
const color=["res","tomato","bluer"];
color.push("red");
/*console.log(color);*/

/*IIFE：立即实行*/

