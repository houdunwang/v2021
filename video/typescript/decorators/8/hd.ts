const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  descriptor.value = () => {
    console.log('后盾人')
  }
}
class User {
  @showDecorator
  public show() {
    console.log('houdunren.com')
  }
}

new User().show()
