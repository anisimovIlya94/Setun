import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { useState, type PropsWithChildren, useCallback } from "react"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { Modal } from "shared/ui/Modal/Modal"

interface NavbarProps {
    className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
	const { className } = props
	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState(false)

	const toggleAuthModal = useCallback(() => {
		setIsAuthModal(prev => !prev)
	},[])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to="/">{t("Главная")}</AppLink>
				<AppLink to="/about">{t("О сайте")}</AppLink>
				<Button className={cls.logInBtn} onClick={toggleAuthModal}>{t("Войти")}</Button>
				<Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis soluta, maiores dolorem ipsam optio explicabo aliquam odio illo tempora ducimus error voluptates sapiente id, excepturi temporibus dolor harum ea!
				</Modal>
			</div>
		</div>
	)
}
