// function sum(...args: number[]): number {
//   return args.reduce((s, n) => s + n, 0)
// }
// console.log(sum(1, 2, 3, 4))

function push(arr: any[], ...args: any[]): any[] {
  arr.push(...args)
  return arr
}
let hd = ['houdunren.com']
push(hd, '向军', '后盾人')
