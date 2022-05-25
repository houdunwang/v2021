{
	type HOUDUNREN = { name: string, age: number, skill: string }

	type HD = Pick<HOUDUNREN, 'name' | 'age'>
	const xj: HD = { name: '后盾人', age: 33 }
}