// let a: '向军' | '后盾人'
// a = '向军'
function hd(arg: boolean): string | number {
  return arg ? '我就干' : 2030
}

let res = hd(true) as string
res = '向军'
console.log(res)
