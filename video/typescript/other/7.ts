{
	// type EXTRACT<T, U> = T extends U ? T : never;

	type HOUDUNREN = string | number | boolean

	const hd: Extract<HOUDUNREN, string | number> = '后盾人';
}