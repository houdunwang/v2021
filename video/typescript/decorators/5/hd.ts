const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.name = '后盾人'
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 200 }
  }
}

const MusicDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = (): void => {
    console.log('播放音乐')
  }
}

@moveDecorator
@MusicDecorator
class Tank {}

const t = new Tank()
console.log((<any>t).getPosition())
;(<any>t).playMusic()
