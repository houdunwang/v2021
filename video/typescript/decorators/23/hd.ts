import 'reflect-metadata'
const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  //哪些参数需要验证
  let requiredParams: number[] = []
  requiredParams.push(parameterIndex)

  Reflect.defineMetadata('required', requiredParams, target, propertyKey)
}

const validateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value

  descriptor.value = function () {
    const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || []
    requiredParams.forEach(index => {
      if (index > arguments.length || arguments[index] == undefined) {
        throw new Error('请传递必要的参数 ')
      }
    })
    return method.apply(this, arguments)
  }
}

class User {
  @validateDecorator
  find(name: string, @RequiredDecorator id: number) {
    console.log(id)
  }
}

new User().find('后盾人', undefined)
