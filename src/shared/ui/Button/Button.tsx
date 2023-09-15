import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINED = "outlined"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme
}

export function Button(props: PropsWithChildren<ButtonProps>) {
	const { className, theme = ButtonTheme.CLEAR, children, ...otherProps } = props

	return (
		<button
			className={classNames(cls.Button, {}, [className, "dd", cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}