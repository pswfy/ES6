/*Proxy:用于修改某些操作的默认行为:代理器*/
/*作用:vue中拦截、预警、上报、扩展功能、统计、僧强对象等*/
/*Proxy:设计模式：代理模式*/
/*1.target:被代理的对象*/
/*2.handler:对代理的对象做的操作:是json*/
/*3.let proxy=new Proxy(target,handler);
1.set(){}、设置
2.get(){}、获取
3.deleteProperty(){}、删除
4.has(){}、有有没有
5.apply(){}调用函数的处理
*/

let obj={
    name:"Vue",
    age:18,
    sex:"男",
    Class:"一年级8班"
};

let newObj=new Proxy(obj,{
    get(target,property){//target:被代理的对象,property:访问的属性key
       /* console.log(`你访问了${property}属性`);*/
        if(property in target){
            return target[property]
        }else {
            console.warn(`你访问了${property}属性不在对象上`);
            return 'error';
        }
    },
    set(target,property,value){//对象、属性、值
        if(property==='age'){
            if(!Number.isInteger(value)){
                console.warn(`${property}必须是Number类型`);
                return 'error';
            }
            if(value>200 || value<=0){
                console.warn(`${property}属性不能大于200或小于0`);
                return 'error';
            }
        }
        target[property]=value;
    },
    deleteProperty(target,property){
        delete target[property]
    },
    has(target,property){
        return property in target;
    },
    apply(target,content,args){/*函数、指向谁、数组叁数*/
        /*处理target是函数的处理*/
    }

});
newObj.name="HTML";
delete newObj.name;
delete newObj.Class;
console.log(obj);
















































