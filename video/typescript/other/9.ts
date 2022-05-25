{
	type XIANGJUNDASHU = { name: string, age: number }

	// type PARTIAL<T> = {
	// 	[P in keyof T]?: T[P]
	// }
	const hd: Partial<XIANGJUNDASHU> = { name: '向军' }
}