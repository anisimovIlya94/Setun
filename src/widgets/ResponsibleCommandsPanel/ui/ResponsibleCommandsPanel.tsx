import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ResponsibleCommandsPanel.module.scss"

import type { PropsWithChildren } from "react"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { ClickedComponent } from "shared/ui/ClickedComponent/ClickedComponent"

interface ResponsibleCommandsPanelProps {
    command: string
    className?: string
}

export function ResponsibleCommandsPanel(props: PropsWithChildren<ResponsibleCommandsPanelProps>) {
	const { command, className } = props

	return (
		<div className={classNames(cls.ResponsibleCommandsWrapper, {}, [className])}>
			<h1 className={cls.title}>
				В панели ответственных команд нажимаем на кнопку: {command}
			</h1>
			<div className={cls.ResponsibleCommandsPanel}>
				<div className={cls.commandsHeader}>
             Задание Ответственных Команд
				</div>
				<div className={cls.emptyButtons}>
					{Array(8).fill(" ").map((item, index) => {
						return <Button key={"button" + index} theme={ButtonTheme.TO_ANIMATION}>-</Button>
					})}
				</div>
				<div className={cls.mainButtonWrapper}>
					<ClickedComponent>
						<Button className={cls.mainButton} theme={ButtonTheme.TO_ANIMATION_CLICKED}>{command}</Button>
					</ClickedComponent>
				</div>
			</div>
		</div>
		
	)
}