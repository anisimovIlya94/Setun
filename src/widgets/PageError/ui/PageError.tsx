import {classNames} from "shared/lib/classNames/classNames"
import cls from "./PageError.module.scss"

import type { PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"

interface PageErrorProps {
 className?: string;
}

export function PageError(props: PropsWithChildren<PageErrorProps>) {
	const { className } = props
	const {t} = useTranslation()
    
	const reloadPage = () => {
		window.location.reload()
	}

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			{t("Что-то пошло не так")}
			<Button theme={ButtonTheme.OUTLINED} onClick={reloadPage}>{t("Перезагрузить страницу")}</Button>
		</div>
	)
}