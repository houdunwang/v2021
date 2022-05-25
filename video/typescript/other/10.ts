{
	type RECORD<K extends string | number | symbol, V> = {
		[P in K]: V
	}
	// {
	// 	name:string | number,
	// 	age:string | number
	// }

	type HD = RECORD<'name' | 'age', string | number>

	const xj: HD = { name: "后盾人", age: 18 }
}