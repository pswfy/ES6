/*对象简介语法*/
let name="WfY";
let age=18;

let json={
    name,
    age,
    showA(){//在这里不好写箭头函数
        return this.name;
    },
    showB(){
        return this.age;
    }
};
/*Object.is(),用来比较两个值是否相等;*/
/*NaN!=NaN*/
/*Number.isNaN()*/
let b=Object.is(NaN,NaN);
/*console.log(b);true*/
/*console.log(Number.isNaN(NaN));//true*/
/*console.log(NaN===NaN);//false*/
/*console.log(Object.is(-0,0));//false*/

/*Object.assign(目标,源...),合拼对象;*/
/*可以用来复制*/
function ajax(option){
    let defaults={
        type:get,
        header:"",
        data:{}
    };
    let json=Object.assign({},defaults,option);/*后面的会覆盖前面的*/
}



let json2={a:1};
let json3={b:2,a:12};
let json4={c:3};

let json5=Object.assign({},json2,json3,json4);
/*console.log(json5);*/
let json6={
    a:"aaaa",
    b:"dddd",
    c:"cccc"
};
/*Object.keys();*/
for(let key of Object.keys(json6)){
    /*console.log(key);*/
}
/*Object.entries();*/
for(let key of Object.entries(json6)){
    /*console.log(key);*/
}
/*Object.values();*/
for(let key of Object.values(json6)){
    /*console.log(key);*/
}

let {x,y,...z}={x:1,y:2,a:3,b:4,c:5};
/*console.log(x);
console.log(y);
console.log(z);*/

let json56={a:100,b:200,c:300};//复制json
let json57={...json56};




