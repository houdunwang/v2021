// type EXCLUDE<T, U> = T extends U ? never : T

type XIANGJUNDASHU = string | boolean

type HOUDUNREN = string | number | boolean

const hd: Exclude<HOUDUNREN, XIANGJUNDASHU> = 100;

