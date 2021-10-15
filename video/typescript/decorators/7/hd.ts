const MusicDecoratorFactory = (type: string): ClassDecorator => {
  console.log(type)
  switch (type) {
    case 'Tank':
      return (target: Function) => {
        target.prototype.playMusic = (): void => {
          console.log('播放战争音乐')
        }
      }
    default:
      return (target: Function) => {
        target.prototype.playMusic = (): void => {
          console.log('播放喜洋洋音乐')
        }
      }
  }
}

@MusicDecoratorFactory('Tank')
class Tank {}

const t = new Tank()
;(<any>t).playMusic()

@MusicDecoratorFactory('Player')
class Player {}

new Player().playMusic()
