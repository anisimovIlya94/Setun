import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import type { PropsWithChildren } from "react"
import { AppLink } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
    className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
	const { className } = props

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to="/">Main</AppLink>
				<AppLink to="/about">About</AppLink>
			</div>
		</div>
	)
}
