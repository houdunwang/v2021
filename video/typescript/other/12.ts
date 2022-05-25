{
	// type HOUDUNREN = keyof string
	// let xj: HOUDUNREN = 'match'

	// type HOUDUNREN = keyof { name: string, age: number }

	// let xj: HOUDUNREN = 'name'


	// function getAttribute<T>(obj: T, key: keyof T): T[keyof T] {
	// 	return obj[key]
	// }

	// const user = { name: '后盾人', age: 18 }
	// getAttribute(user, 'name')


	function getAttribute<T, D extends keyof T>(obj: T, key: D): T[D] {
		return obj[key]
	}

	// const user = { name: '后盾人', age: 18 }
	getAttribute('abc', 'includes')
}