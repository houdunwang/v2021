{
	// function merge<T, U>(a: T & U, b: U): T & U {
	// 	for (const key in b) {
	// 		a[key] = b[key] as any
	// 	}

	// 	return a;
	// }

	type HD = ('a' | 'b') & ('a') //a 

	type HD2 = ('a' | 'b') & ('a' | string) //a | b
}