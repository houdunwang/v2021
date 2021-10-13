{
  interface PlayEndInterface {
    end(): void
  }
  interface AnimationInterface {
    name: string
    move(): void
  }
  abstract class Animation {
    protected getPos(): { x: number; y: number } {
      return { x: 100, y: 300 }
    }
  }

  class Tank extends Animation implements AnimationInterface, PlayEndInterface {
    name: string = '敌方坦克'
    public move(): void {
      console.log(`${this.name}移动`)
    }
    end() {
      console.log('游戏结束')
    }
  }

  class Player extends Animation implements AnimationInterface, PlayEndInterface {
    name: string = '玩家'
    public move(): void {
      console.log(`${this.name}坦克移动`)
    }
    end() {
      console.log('游戏结束')
    }
  }
  const hd = new Tank()
  const play = new Player()
  console.log(play.end())
}
