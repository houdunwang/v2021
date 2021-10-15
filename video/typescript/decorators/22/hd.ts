import 'reflect-metadata'
const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  //哪些参数需要验证
  let requiredParams: number[] = []
  requiredParams.push(parameterIndex)

  Reflect.defineMetadata('required', requiredParams, target, propertyKey)
}

const validateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(Reflect.getMetadata('required', target, propertyKey))
}

class User {
  @validateDecorator
  find(name: string, @RequiredDecorator id: number) {
    console.log(id)
  }
}

// new User().find(undefined)
