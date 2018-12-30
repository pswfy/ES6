/*定义模块*/
console.log("模块1加载了");
/*
export let a=10;
export let b=10;
export let c=10;*/
const b=1;
const a=2;
const c=3;
/*as:别名*/

export default function(){//默认都有引入时不要{}
    console.log("default");
}

export{
    a,b,c as cc
}
