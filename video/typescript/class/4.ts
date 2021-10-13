{
  class Person {
    protected name: string
    public age: number
    protected site: string = '后盾人网站'
    public info(): string {
      return `${this.name} 的年龄是${this.age}，Ta 来自于${this.site}`
    }
    protected getInfo(): string {
      return this.info()
    }
  }

  class User extends Person {
    constructor(n: string, a: number) {
      super()
      this.name = n
      this.age = a
    }
    public info(): string {
      return `${this.name} 的年龄是${this.age}，Ta 来自于${this.site}`
    }
    public show() {
      return this.getInfo()
    }
  }

  const hd = new User('后盾人', 18)
  console.log(hd.show())
}
