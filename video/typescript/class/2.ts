{
  class User {
    public name: string
    public age: number
    constructor(n: string, a: number) {
      this.name = n
      this.age = a
    }
    public info(): string {
      return `${this.name} 的年龄是${this.age}`
    }
  }

  const hd = new User('后盾人', 18)
  const xj = new User('向军', 16)
  for (const key in xj) {
    if (hd.hasOwnProperty(key)) {
      console.log(xj[key])
    }
  }
}
