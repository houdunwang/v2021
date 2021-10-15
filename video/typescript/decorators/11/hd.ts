const SleepDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = () => {
    setTimeout(() => {
      method()
    }, 2000)
  }
}
class User {
  @SleepDecorator
  public response() {
    console.log('houdunren.com')
  }
}

new User().response()
