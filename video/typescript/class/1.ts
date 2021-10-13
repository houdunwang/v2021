class User {
  name: string
  age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  info(): string {
    return `${this.name} 的年龄是${this.age}`
  }
}

const hd = new User('后盾人', 18)
const xj = new User('向军', 22)

const users: User[] = []
users.push(hd, xj)
console.log(users)
