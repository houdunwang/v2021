{
    //赋值不会报错
    var a = 3;
    var b = 5;
    //在使用时，TS不知道是什么类型，所以需要使用类型断言进行告之
    var c = a + b;
    console.log(c);
    // let hd: string = '99'
    // let xj: number = hd as number //报错，TS 认为字符串转数值会出现错误
}
