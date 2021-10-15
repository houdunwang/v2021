const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // descriptor.value = () => {
  //   console.log('后盾人')
  // }
  // console.log(descriptor)
  descriptor.writable = false
}
class User {
  @showDecorator
  public static show() {
    console.log('houdunren.com')
  }
}

User.show = () => {
  console.log('show method')
}

User.show()
