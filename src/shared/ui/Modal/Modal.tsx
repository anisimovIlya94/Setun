import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Modal.module.scss"
import CloseModalIcon from "shared/assets/icons/close-modal-icon.svg"
import { useRef, type MouseEvent, type PropsWithChildren, type ReactNode, useEffect, useState, useCallback } from "react"
import { Button, ButtonTheme } from "../Button/Button"
import { Portal } from "../Portal/Portal"
import { useTheme } from "app/providers/ThemeProvider"

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export function Modal(props: PropsWithChildren<ModalProps>) {
	const { className, children, isOpen, onClose } = props
	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const [isClosing, setIsClosing] = useState(false)
	const {theme} = useTheme()
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.closing]: isClosing
	}
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			} , ANIMATION_DELAY)
		}
	},[onClose])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			closeHandler()
		}
	}, [closeHandler])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
		}
		return () => {
			clearTimeout(timerRef.current)
			removeEventListener("keydown", onKeyDown)
		}
	},[isOpen, onKeyDown])

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}
	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className, theme])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						<div className={cls.closeBtnWrapper}>
							<Button theme={ButtonTheme.CLEAR} onClick={closeHandler}>
								<CloseModalIcon/>
							</Button>
						</div>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}