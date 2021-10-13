// interface Member {
//   name: string
// }
// interface User extends Member {
//   age: number
// }
// class Person implements User {
//   age: number = 23
//   name: string = '后盾人'
// }
// const hd: User = {
//   name: '后盾人',
//   age: 21,
// }

type Name = {
  name: string
}

// type Age = {
//   age: number
// }

// type User = Name | Age

// const hd: User = { name: '后盾人' }

// type User = { name: string; age: number }

// class Person implements User {
//   name: string = '后盾人'
//   age: number = 31
// }

interface User {
  name: string
}

type Member = { age: number }

type Person = User & Member

const hd: Person = {
  name: '李四',
  age: 34,
}
