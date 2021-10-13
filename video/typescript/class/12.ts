{
  interface UserInterface {
    name: string
    age?: number
    info?(): string
    [key: string]: any
  }
  let hd: UserInterface = {
    name: '后盾人',
    sex: '女',
    // age: 18,
    // info() {
    //   return `${this.name}-${this.age}`
    // },
  }
  console.log(hd)
}
