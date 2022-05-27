{
	type User = { name: string, age: number, get(): void };

	type FilterObjectProperty<T, U> = {
		[K in keyof T as Exclude<K, U>]: T[K]
	}
	// type UU = { [x: string]: string }

	type HD = FilterObjectProperty<User, 'name' | 'age'>

}