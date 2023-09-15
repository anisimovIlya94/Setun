type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, addictional: string[] = []): string => {
	return [
		cls,
		...addictional.filter(Boolean),
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className)
	].join(" ")
}
//fdfdf