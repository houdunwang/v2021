// let hd: any = 'houdunren.com'
// hd = []
// hd = {}
// hd = null
// hd = undefined
// hd = class {}
// console.log(hd)

// let hd: Array<any> = []
// hd.push('houdunren.com', 23, [], {}, class {}, null, undefined)
// console.log(hd)

// console.log([] instanceof Object)

// class Hd {
//   constructor() {}
//   get = () => 'houdunren.com'
// }

// const obj: Hd = new Hd()
// console.log(obj.show())

function sum(a, b: number) {
  return a + b
}

console.log(sum(3, 2))
