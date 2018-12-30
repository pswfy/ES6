/*解构赋值*/
let [a, b, c] = [12, 5, 6];
/*注意:左右结构一致*/
let json = {
    name: "WfY",
    age: 28,
    job: "码农"
};
/*job:j:别名*/
/*sex="男":默认值*/
let {name, age = 24, job: j, sex = "男"} = json;
function getPso(){
    return {left:10,top:20}
}
let {left,top}=getPso();
/*结构赋值demo*/
function show({a=0,b=0}){
    console.log(a+b);
}
show({a:1,b:2});

