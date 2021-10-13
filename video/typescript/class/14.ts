interface UserInterface {
  name: string
  age: number
  isLock: boolean
}
const user: UserInterface = {
  name: '后盾人',
  age: 18,
  isLock: false,
}
function isLock(user: UserInterface, lock: boolean): UserInterface {
  user.isLock = lock
  return user
}
isLock(user, true)
