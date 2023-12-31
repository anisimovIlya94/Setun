import {classNames} from "shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"
import type { PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"

interface NotFoundPageProps {
    className?: string;
}

export function NotFoundPage(props: PropsWithChildren<NotFoundPageProps>) {
	const {t} = useTranslation()
	const { className } = props

	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			{t("Страница не найдена")}
		</div>
	)
}