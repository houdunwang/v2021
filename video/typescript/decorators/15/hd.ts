const user = {
  name: '向军大叔',
  isLogin: true,
}
const AccessDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = () => {
    if (user.isLogin === true) {
      return method()
    }
    alert('请登录后操作')
    location.href = 'login.html'
  }
}

class Article {
  show() {
    console.log('显示文章')
  }
  @AccessDecorator
  store() {
    console.log('保存文章')
  }
}
new Article().store()
