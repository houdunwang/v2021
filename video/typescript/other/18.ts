{
	type USER = { name: string, age: number, get(a: string): void }

	type FilterProperty<T, U> = {
		[K in keyof T]: T[K] extends U ? never : K
	}[keyof T]

	type UU = Pick<USER, FilterProperty<USER, Function>>
}