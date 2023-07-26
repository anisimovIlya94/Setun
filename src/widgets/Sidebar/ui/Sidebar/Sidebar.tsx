import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"

import { useState, type PropsWithChildren } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"
import { LOCAL_STORAGE_COLLAPSE_KEY } from "shared/lib/consts/localStorage"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { useTranslation } from "react-i18next"

interface SidebarProps {
 className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
	const { t } = useTranslation()
	const { className } = props
	const [collapsed, setCollapsed] = useState(Boolean(localStorage.getItem(LOCAL_STORAGE_COLLAPSE_KEY)) || false)

	const collapse = () => {
		const newCollapse = !collapsed
		setCollapsed(newCollapse)
		if (!newCollapse) {
			localStorage.removeItem(LOCAL_STORAGE_COLLAPSE_KEY)
		} else {
			localStorage.setItem(LOCAL_STORAGE_COLLAPSE_KEY, String(newCollapse))
		}
	}

	return (
		<div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
			<button onClick={collapse}>{t("Изменить")}</button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				{/* <div> */}
				<LangSwitcher/>
				{/* </div> */}
			</div>
		</div>
	)
}