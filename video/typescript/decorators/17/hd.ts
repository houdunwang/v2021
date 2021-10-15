const RequestDecorator = (url: string): MethodDecorator => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value
    // axios.get(url).then()
    new Promise<any[]>(resolve => {
      setTimeout(() => {
        resolve([{ name: '向军大叔' }, { name: '后盾人' }])
      }, 2000)
    }).then(users => {
      method(users)
    })
  }
}
class User {
  @RequestDecorator('https://www.houdunren.com/api/user')
  public all(users: any[]) {
    console.log(users)
  }
}
