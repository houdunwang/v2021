// function sum(...args: number[]): number {
//   return args.reduce((s, n) => s + n, 0)
// }
// console.log(sum(1, 2, 3, 4))
function push(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    arr.push.apply(arr, args);
    return arr;
}
var hd = ['houdunren.com'];
push(hd, '向军', '后盾人');
