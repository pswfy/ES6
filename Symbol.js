/*Symbol是es6新加的原始数据类型:表示:唯一的*/
/*可以作为唯一的key使用*/
/*Number、String、Boolean、Object、undefined、function、Symbol*/
let symbol = Symbol("red");
let json = {
    a: '1',
    b: '2',
    [symbol]: "red"
};
/*console.log(json[symbol]);*/

for (let item in json) {
    /* console.log(item);/!*[symbol]不出来*!/*/
}
/*箭头函数*/

/*generator函数：生成器:解决异步*/
function* show() {
    yield 'welcome';
    yield 'to';
    return 'WfY'
}
/*done*/
let s=show();
/*console.log(s.next());
console.log(s.next());
console.log(s.next());*/

for(let val of s){//return的不会遍历
    /*console.log(val);*/
}
/*可以解构和...*/
let [a,b]=show();
/*console.log(a,b);*/
/*console.log(...show());*/
/*假数组换真数组*/
/*console.log(Array.from(show()));*/

