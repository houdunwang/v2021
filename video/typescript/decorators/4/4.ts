const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.name = '后盾人'
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 200 }
  }
}

@moveDecorator
class Tank {}

const t = new Tank()
// moveDecorator(Tank)
console.log((<any>t).getPosition())
