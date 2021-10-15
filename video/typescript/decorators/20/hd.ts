const RandomColorDecorator: PropertyDecorator = (target: object, propertyKey: string | symbol) => {
  const colors: string[] = ['red', 'blue', 'yellow', 'green', '#383838']
  Object.defineProperty(target, propertyKey, {
    get() {
      return colors[Math.floor(Math.random() * colors.length)]
    },
  })
}
class Hd {
  @RandomColorDecorator
  public color: string | undefined

  public draw() {
    document.body.insertAdjacentHTML('beforeend', `<div style="height:200px;width:200px;background-color:${this.color}">houdunren.com@向军老师</div>`)
  }
}

new Hd().draw()
