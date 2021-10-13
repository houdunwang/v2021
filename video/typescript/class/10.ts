{
  abstract class Animation {
    abstract name: string
    abstract move(): void
    protected getPos(): { x: number; y: number } {
      return { x: 100, y: 300 }
    }
  }

  class Tank extends Animation {
    name: string = '敌方坦克'
    public move(): void {
      console.log(`${this.name}移动`)
    }
  }

  class Player extends Animation {
    name: string = '玩家'
    public move(): void {
      console.log(`${this.name}坦克移动`)
    }
  }
  const hd = new Tank()
  const play = new Player()
  hd.move()
  play.move()
}
