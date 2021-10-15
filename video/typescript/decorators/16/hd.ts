type userType = { name: string; isLogin: boolean; permissions: string[] }
const user: userType = {
  name: '向军大叔',
  isLogin: true,
  permissions: ['store', 'manage', 'update'],
}
const AccessDecorator = (keys: string[]): MethodDecorator => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const validate = () =>
      keys.every(k => {
        return user.permissions.includes(k)
      })

    descriptor.value = () => {
      if (user.isLogin === true && validate()) {
        alert('验证通过')
      } else {
        alert('验证失败')
      }
    }
  }
}

class Article {
  show() {
    console.log('显示文章')
  }
  @AccessDecorator(['store', 'manage'])
  store() {
    console.log('保存文章')
  }
}
new Article().store()
