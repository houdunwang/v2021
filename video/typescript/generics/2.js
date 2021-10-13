// type t = {
// 	length:number
// }
// interface T {}
// interface LengthIntrface {length:number}
// T extends LengthIntrface
// type stringS = { length: number; substring(): void }
// type arrayA = { length: number; shift(): number }
// type t ={}   t & arrayA
// type T = {length:number}
// type T = {}
function getLength(arg) {
    return arg.length;
}
// console.log(getLength('houdunren.com'))
console.log(getLength(['后盾人', '向军', 38]));
// console.log(getLength(18))
// type Stype = { length: number }
// let a: Stype = 'houdunren.com'
// a = 23
