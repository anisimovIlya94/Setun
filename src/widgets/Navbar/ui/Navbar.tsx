import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import type { PropsWithChildren } from "react"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
	const { className } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to="/">{t("Главная")}</AppLink>
				<AppLink to="/about">{t("О сайте")}</AppLink>
			</div>
		</div>
	)
}
