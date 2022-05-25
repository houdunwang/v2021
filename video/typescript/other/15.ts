{
	// interface A { name: string }
	// type B = { age: number }

	// let c: A & B = { name: '后盾人', age: 100 }

	// type HD = string & number;

	// type HD2 = 'a' & 'b'

	// type A = { name: string, age: number }
	// type B = { age: number, name: boolean }
	// //{age:number}  & { age: number, name: boolean }
	// type HD = Pick<A, 'age'> & B

	// //报错 不能将类型“string”分配给类型“never”。
	// let c: HD = { age: 30, name: true }

	type User = { name: string, age: number }
	type Member = { avatar: string } & User

	let member: Member = {
		name: 'houdunren', avatar: 'xj.png', age: 30
	}
}