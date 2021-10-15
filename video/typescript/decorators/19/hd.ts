const LowerDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  // console.log(propertyKey)
  let value: string
  Object.defineProperty(target, propertyKey, {
    get: () => {
      return value.toLowerCase()
    },
    set: v => {
      value = v
    },
  })
}

class Hd {
  @LowerDecorator
  public title: string | undefined
}

const obj = new Hd()
obj.title = 'KLDIIOLKEKLEIOLKDKLD'

console.log(obj.title)
