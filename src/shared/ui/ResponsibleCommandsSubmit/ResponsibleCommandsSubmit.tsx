import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ResponsibleCommandsSubmit.module.scss"

import type { PropsWithChildren } from "react"
import { ClickedComponent } from "../ClickedComponent/ClickedComponent"
import { Button, ButtonTheme } from "../Button/Button"
import CancelIcon from "../../assets/icons/cancel_icon.svg"
import CheckIcon from "../../assets/icons/submit_icon.svg"

interface ResponsibleCommandsSubmitProps {
    className?: string
    stationNumber?: number
    isThird?: boolean
}

export function ResponsibleCommandsSubmit(props: PropsWithChildren<ResponsibleCommandsSubmitProps>) {
	const { className, isThird, stationNumber } = props

	return (
		<div className={classNames(cls.ResponsibleCommandsSubmit, {}, [className])}>
			<div className={cls.header}></div>
			<div className={cls.warning}>
				{!isThird && stationNumber &&<p>станция №{stationNumber}</p>}
				{!isThird &&<p className={cls.warn}>Обращаем внимание на команду!</p>}
			</div>
			<div className={cls.buttonsWrapper}>
				<ClickedComponent>
					<Button theme={ButtonTheme.TO_ANIMATION_CLICKED}>
						<CheckIcon className={cls.icon} />
                 Подтверждаю
					</Button>
				</ClickedComponent>
				<Button theme={ButtonTheme.TO_ANIMATION}>
					<CancelIcon className={classNames(cls.icon, {}, [cls.warn])} />
                 Отмена
				</Button>
			</div>
			<div className={cls.footer}>
				{isThird
					? <p className={cls.warn}>Обращаем внимание на ответ от станции!</p>
					: null
				}
			</div>
		</div>
	)
}