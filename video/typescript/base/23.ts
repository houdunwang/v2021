// let a: string
// a = 'houdunren.com'

// let hd: (a: number, b: number) => number
// hd = (x: number, y: number): number => {
//   return x + y
// }

// console.log(hd(1, 1))
type userType = { name: string; age: number }

type userAddFun = (user: userType) => boolean

let addUser: userAddFun = (user: userType): boolean => {
  console.log('添加用户')

  return true
}

addUser({ name: 'houdunren', age: 18 })
