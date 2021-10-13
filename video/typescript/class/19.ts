type IsAdmin = boolean
type Sex = 'boy' | 'girl'

type User = {
  name: string
  age: number
  isAdmin: IsAdmin
  sex: Sex
  show(): string
  [key: string]: any
}

// interface User {
//   name: string
//   age: number
//   show(): string
//  [key: string]: any
// }

const hd: User = { name: '后盾人', isAdmin: true, sex: 'girl', age: 23, show: () => 'houdunren.com', city: '北京' }
