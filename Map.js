/*map:类似json,键可以是变量，任意类型*/
let map=new Map();
let json={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6
};
/*设置*/
map.set(json.a,json.b).set(json.c,json.d).set(json.e,json.f);
/*获取*/
/*console.log(map.get(json.a));*/
/*删除*/
/*map.delete(json.a);*/
/*有没有:has*/
/*console.log(map.has(json.a));*/
/*清除clear*/
/*map.clear();
console.log(map);*/
/*遍历：默认就entries*/
for(let [key,value] of map){
    // console.log(key,value);
}

map.forEach((key,value)=>{
    /*console.log(key,value);*/
});

/*WeakMap():key只能是对象*/

/*小结:*/
/*Set:里面是数组、不能重复、没有key、没有get方法*/
/*Map:对json的加强，key可以是任意类型*/
