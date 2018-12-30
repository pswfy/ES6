/*javascript:class*/
/*js中的类:*/

/*es5:类使用函数模拟的：构造函数*/
function Person(name, age, sex, height, width) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.width = width;
    Person.prototype.showName = function () {
        return `名字为${this.name}`
    };
    Person.prototype.showAge = function () {
        return `名字为${this.age}`
    };
    /*Object.assign:合拼对象*/
    Object.assign(Person.prototype, {
        showSex() {
            return `${name}的年性别为${sex}`;
        },
        showHeight() {
            return `${name}的身高为${height}`;
        },
        showWidth() {
            return `${name}的体重为${width}`;
        }
    })

}

/*ES6类*/
class PersonEs6 {// let PersonEs6=class{}
    /*类的构成函数：new实例就运行*/
    constructor(name, age) {
        /*console.log("构造函数运行了"+name+":"+age);*/
        this.name = name;
        this.age = age;
    };

    show(sex) {//方法名还可以是变量,方法也可以有自己的叁数
        return `我的名字叫${this.name}年龄${this.age}性别${sex}`
    };

    /*类方法*/
    static find() {
        return '类的方法，静态方法'
    }
}

/*class注意:类没有提升的功能，必须先定义在new。使用*/
/*class:this关键字比es5好用*/
/*1.fn.call(this指向谁,叁数1，叁数3...);*/
/*2.fn.apply(this指向谁,[叁数1，叁数3...]);*/
/*2.fn.bind(this指向谁);*/
let personEs6 = new PersonEs6("WfY", 26);

/*3.getter和setter*/
/*class Person1{
    constructor(){

    };
    set ass(val){
        console.log(val);
    };
    get aaa(){
        console.log(this.aaa);
       return this.aaa;
    }
}
let person1=new Person1();

person1.ass=123;*/

/*class 继承：extends*/
class PersonEs6P extends PersonEs6 {
    constructor(name, age, sex) {
        super(name, age);//调用父级的构造函数
        this.sex = sex;
    }

    /*重写父类的方法*/
    show() {
        return `我的名字叫${this.name}年龄${this.age}性别${this.sex}`
    }
}

let personEs6P = new PersonEs6P("WfY", 26, '男');
console.log(personEs6P.show());
/*console.log(PersonEs6P.find());//父类的静态方法也可以被继承*/

/*类案例托拆-普通的*/
class Drag {
    constructor(id) {
        this.oDiv = document.querySelector(id);
        this.disX = 0;
        this.disY = 0;
        init();
    };

    init() {
        this.oDiv.onmousedown = function (event) {
            this.disX = event.clientX - this.oDiv.offsetLeft;
            this.disY = event.clientY - this.oDiv.offsetTop;
            document.onmousemove = this.fnMove.bind(this);
            document.onmouseup = this.fnUp.bind(this);
            return false;
        }.bind(this);
    };

    fnMove(event) {
        this.oDiv.style.left = event.clientX - this.disX + 'px';
        this.oDiv.style.top = event.clientX - this.disY + 'px';
    };

    fnUp() {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

/*类案例托拆-限制范围的*/
class MixDrag extends Drag{
    constructor(id){
        super(id);

    };
    /*限制范围*/
    fnMove(event) {
        super.fnMove(event);
        if(this.oDiv.offsetLeft<=0){
            this.oDiv.style.left=0;
        }
    };
}
