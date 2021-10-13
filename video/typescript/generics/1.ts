//泛型 generics
// let a: string = 'houdunren.com'
// a = 34
// console.log(a)

function dump<T>(arg: T): T {
  return arg
}

let hd = dump('houdunren.com')

// function dumpBoolean(arg: boolean): boolean {
//   return arg
// }
let xj = dump(true)
