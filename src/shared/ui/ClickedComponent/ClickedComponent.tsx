import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ClickedComponent.module.scss"
import CursorIcon from "../../assets/icons/cursor.svg"

import type { PropsWithChildren, ReactNode } from "react"

interface ClickedComponentProps {
 children: ReactNode
}

export function ClickedComponent(props: PropsWithChildren<ClickedComponentProps>) {
	const { children } = props

	return (
		<div className={classNames(cls.ClickedComponent, {}, [])}>
			{children}
			<CursorIcon className={cls.cursor} />
		</div>
	)
}