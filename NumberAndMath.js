/*数字(数值)变化:*/
/*1.inNaN*/
/*2.二进制*/
let a=0b1010101000;
/*3.八进制*/
let b=0o12374;
/*4.是不是number等都放在Number对象下*/
let c=Number.isNaN(a);
/*5.是不是number*/
c=Number.isFinite(0);
/*6.是不是整数*/
c=Number.isInteger(12);
/*7.parseInt*/
c=Number.parseInt(12.33);
/*8.parseFloat*/
c=Number.parseFloat(12.333);
/*安全整数:-(2^53-1)到(2^53-1)*/

c=-(2**53-1);//2的52次方
c=(2**53-1);//2的52次方
/*9.检验是否是安全数:isSafeInteger*/
c=Number.isSafeInteger(2**53-1);
c=Number.isSafeInteger(-(2**53-1));
/*10.获取最大最小安全整数*/
c=Number.MAX_SAFE_INTEGER;
c=Number.MIN_SAFE_INTEGER;

/*Math:对象*/

/*1.截断:保留整数部分*/
c=Math.trunc(4.999);

/*2.判断是否是0-整数-负数:1,0,-0,-1,NaN*/
c=Math.sign("sss");

/*3.计算一个数的立方根*/
c=Math.cbrt(3344);

console.log(c);

