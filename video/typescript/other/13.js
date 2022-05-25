{
    // let hd = '后盾人'
    // type HOUDUNREN = typeof hd
    // let xj: HOUDUNREN = 334
    // let hd = { name: '后盾人', age: 18 }
    // type HOUDUNREN = typeof hd
    // let xj: HOUDUNREN = { age: 18, name: '后盾人' }
    function getAttribute(obj, key) {
        return obj[key];
    }
    //typeof obj => { name: string, age:number }
    // keyof { name: string, age:number } => name|age
    var hd = { name: 'houdunren', age: 28 };
    console.log(getAttribute(hd, 'name'));
}
