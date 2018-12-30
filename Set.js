/*Set数据结构:类似数组，不能有重复的值,叁数数组类型*/
const set = new Set([1, 2, 3, 4, 5, 6, 7, 7]);
/*1.添加:加到后面*/
set.add(10).add(22).add(100);
set.add(['a', 'b', 's']);
/*2.删除*/
set.delete(10);
/*3.有没有=>boolean*/
let s = set.has(1);
/*4.size:属性*/
let d = set.size;
/*5.清除*/
/*set.clear();*/
/*3.遍历*/
/*for...of...*/
/*keys和values一样，默认values*/
for (let item of set.keys()) {
    // console.log(item)
}
for (let item of set.values()) {
    // console.log(item)
}
for (let item of set.entries()) {//keys//values
    // console.log(item)
}

set.forEach((value, index) => {
    /*console.log(value);
    console.log(index);*/
});
/*5.可以解构*/
/*console.log(...set);*/

// 6.filter/map可以使用数组的方法
let b = new Set([...set].map(val => val * 2));
let a = new Set([...set].filter(val => val % 2 === 0));

/*set注意的地方*/
let json={
    a:1,
    b:2
};
let json2={
    a:1,
    b:2
};
set.add(json).add(json2);

set.forEach((item,index)=>{
    /*console.log(item.a);*/
});

//WeakSet:推荐叁数是对象类型,没有size，clear，

let wSet=new WeakSet();//开始不能直接加json
/*感觉没什么用*/



