/*数组的各种遍历*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*es5遍历*/
/*1.for*/
for (let i = 0; i < arr.length; i++) {
    /*console.log(arr[i]);*/
}
/*2.while*/
/*3.arr.forEach()*/
arr.forEach((val, index, arr) => {//返回:undefined
    // console.log(val);
    // console.log(index);
    // console.log(arr);
    // console.log(this);
}, 123);//改变this123:ES5下
/*4.arr.map()*/
let newArr = arr.map((item, index, arr) => {/*有返回值*/
    return item + '-----';
});
/*5.arr.filter()：过滤*/
let newFiler = arr.filter((item, index, arr) => {/*有返回值:boolean:true,返回有*/
    if (item > 3) {
        return true;
    }
});
/*6.arr.some():只有一项*/
let newSome = arr.some((item, index, arr) => {/*有返回值:返回boolean：:类似查找，只要有一项就返回true*/
    return item = 2
});
/*7.arr.every()：返回boolean：:都满足返回true*/
let newEvery = arr.every((item, index, arr) => {
    return item > 0
});
/*8.arr.reduce():累加prev：上一前项，cur：当前项*/
let newReduce = arr.reduce((prev, cur, item, index, arr) => {
    return prev + cur;
});
/*9.arr.reduceRight():累加prev：上一前项，cur：当前项*/
let reduceRights = arr.reduceRight((prev, cur, item, index, arr) => {
    return prev + cur;
});
/*10:for..of */
for (let val of arr) {
    /*console.log(val);*/
}
for (let index of arr.keys()) {
    /*console.log(index);*/
}
/*arr.keys():数组的下标*/
/*arr.antries():数组某一项*/

/*数组新增的东西*/
let arr1 = [1, 2, 3, 4, 5];
/*let arr2=[...arr1];*/
/*Array.from():把类数组转成真数组*/
let arr2 = Array.from(arr1);

function show23() {
    let ages = Array.from(arguments);
    console.log(ages);
}

let json = {
    0: 'apple',
    1: "bannana",
    2: "orange",
    length: 3
};

let arr44 = Array.from(json);

/*arr.find();找到第一个符合条件的*/
/*arr.findIndex();找到第一个符合条件的下标：找到1：找不到-1*/

let arr50 = [23, 200, 101,900, 80, 100];

let rrr=arr50.findIndex((val, index, arr50)=>{
    return val>100
});


/*arr.fill(填充的东西,开始位置，结束位置):填充*/
let arr80=new Array(10);
arr80.fill("默认值",0,1);

/*arr.includes():有没有返回boolean*/
let b=arr50.includes(200);



