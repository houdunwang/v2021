{
  class Person {
    protected name: string
    public age: number
    protected info(): string {
      return `${this.name} 的年龄是${this.age}`
    }
  }
  class User extends Person {
    constructor(n: string, a: number) {
      super()
      this.name = n
      this.age = a
    }
    public show() {
      return this.info()
    }
  }

  const hd = new User('后盾人', 18)
  console.log(hd.show())
}
