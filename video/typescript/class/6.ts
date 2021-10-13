class User {
  constructor(public name: string) {
    this.name = this.initName(name)
  }
  private initName(name: string) {
    return `${name}-houdunren.com`
  }
}

const hd = new User('后盾人')
console.log(hd.name)
