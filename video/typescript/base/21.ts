type userType = { name: string; age: number }

let addUser = (user: userType): void => {
  console.log('添加用户')
}

let updateUser = (user: userType): void => {
  console.log('更新用户')
}

updateUser({ name: '后盾人', age: 18 })
