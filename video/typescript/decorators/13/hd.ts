const ErrorDecortator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = () => {
    try {
      method()
    } catch (error: any) {
      console.log(`%choudunren.com 后盾人人人做后盾`, 'color:green;font-size:30px;')
      console.log(`%c${error.message}`, 'color:red;font-size:16px;')
    }
  }
}

class User {
  @ErrorDecortator
  find() {
    throw new Error('您查找的用户不存在')
  }

  @ErrorDecortator
  create() {
    throw new Error('创建用户失败')
  }
}

new User().create()
