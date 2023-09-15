import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"

import { useState, type PropsWithChildren } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"
import { LOCAL_STORAGE_COLLAPSE_KEY } from "shared/lib/consts/localStorage"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { Button } from "shared/ui/Button/Button"
import CollapseEllipse from "shared/assets/icons/sidebar_collapse_ellipse.svg"
import CollapseArrowLeft from "shared/assets/icons/sidebar_collapse_arrow_left.svg"
import CollapseArrowRight from "shared/assets/icons/sidebar_collapse_arrow_right.svg"

interface SidebarProps {
 className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
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
		<div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
			<Button
				data-testid="sidebar-toggle"
				onClick={collapse}
				className={cls.sidebar_toggle}
			>
				<div>
					<CollapseEllipse />
					{collapsed ? <CollapseArrowRight className={cls.arrow} /> : <CollapseArrowLeft className={cls.arrow} />}
				</div>
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	)
}