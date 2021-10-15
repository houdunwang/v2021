const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.name = '后盾人'
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 200 }
  }
}

@moveDecorator
class Tank {
  // public getPosition() {}
}

const t = new Tank()
console.log((t as any).name)

console.log((<any>t).getPosition())

@moveDecorator
class Player {
  //   public getPosition() {}
}

const p = new Player()
console.log((p as any).getPosition())
