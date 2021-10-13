function hd() {
  let a = 'houdunren.com'
  let b = (x: number, y: number): number => x + y
  return [a, b] as const
}

const [n, m] = [...hd()]
console.log(m(12, 88))

// console.log((m as (x: number, y: number) => number)(18, 2))
// console.log(m(12, 18))
// console.log(m(12, 10))
