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