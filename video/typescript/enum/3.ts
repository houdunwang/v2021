let a: string = 'houdunren.com'

let b = 99 as const
// b = '向军'
// const c = '后盾人'
// let b = true

const arr = [a, b, 89, 'houdunren.com', true] as const

const obj = {
  name: b,
} as const
