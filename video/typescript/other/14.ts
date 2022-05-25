{
	type HOUDUNREN = {
		[x: `${string}Hd`]: keyof any
		city: string
		age: number
		// name: string
		// city: string
	}

	let hd: HOUDUNREN = {
		nameHd: 'houdunren',
		city: 'beijing',
		age: 34
	}

	// type HOUDUNREN = Record<'name' | 'city', string>

	// let hd: HOUDUNREN = {
	// 	name: 'houdunren',
	// 	city: 'ccc'
	// }
}