const SleepDecorator =
  (times: number): MethodDecorator =>
  (...args: any[]) => {
    const [, , descriptor] = args
    const method = descriptor.value
    descriptor.value = () => {
      setTimeout(() => {
        method()
      }, times)
    }
  }
class User {
  @SleepDecorator(0)
  public response() {
    console.log('houdunren.com')
  }
}

new User().response()
