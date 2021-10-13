enum SexType {
  BOY,
  GIRL,
}
interface UserInterface {
  name: string
  age: number
  sex: SexType
}

const hd: UserInterface = {
  name: '后盾人',
  age: 18,
  sex: SexType.GIRL,
}

const xj: UserInterface = { name: '向军', age: 11, sex: SexType.BOY }

const users: UserInterface[] = [hd, xj]
console.log(users)
