{
  interface UserInterface {
    name: string
    age: number
  }
  class User {
    _info: UserInterface
    constructor(user: UserInterface) {
      this._info = user
    }
    get info(): UserInterface {
      return this._info
    }
  }

  const hd = new User({ name: '后盾人', age: 18 })
  console.log(hd.info)
}
