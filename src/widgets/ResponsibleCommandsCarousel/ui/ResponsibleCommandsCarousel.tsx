import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ResponsibleCommandsCarousel.module.scss"
import { Carousel } from "antd"

import { useRef, type PropsWithChildren } from "react"
import { ResponsibleCommandsPanel } from "widgets/ResponsibleCommandsPanel"
import { ResponsibleCommandsSubmit } from "shared/ui/ResponsibleCommandsSubmit/ResponsibleCommandsSubmit"
import { useTheme } from "app/providers/ThemeProvider"

interface ResponsibleCommandsCarouselProps {
 className?: string;
}

export interface CarouselRef {
    next: () => void;
    prev: () => void;
}

export function ResponsibleCommandsCarousel(props: PropsWithChildren<ResponsibleCommandsCarouselProps>) {
	const { className } = props
	const { theme } = useTheme()
	const nextRef = useRef<CarouselRef>()

	const handleNext = () => {
		nextRef.current.next()
	}
	const handlePrev = () => {
		nextRef.current.prev()
	}

	return (
		<div className={cls.wrapp}>
			<Carousel
				ref={(ref) => {
					nextRef.current = ref
				}}
				dots={false}
				className={classNames(cls.ResponsibleCommandsCarousel, {}, [className, theme])}
			>
				<div>
					<div className={cls.ff}>
						<ResponsibleCommandsPanel command="ГРИ" />
					</div>
				</div>
         
				<div className={cls.secondWindow}>
					<h1 className={cls.title}>Нажимаем первое и второе подтверждение. Обращаем внимание на отправляемую команду!</h1>
					<div className={cls.firstSubmit}>
						<ResponsibleCommandsSubmit stationNumber={1} />
						<ResponsibleCommandsSubmit stationNumber={2}/>
					</div>
			
				</div>
				<div>
					<h1 className={cls.title}>Нажимаем третье подтверждение</h1>
					<div className={cls.ff}>
						<ResponsibleCommandsSubmit isThird/>
					</div>
					<h1 className={cls.title}>После того, как придут ТС ОПГ, ИР нажимаем завершить</h1>
					<div className={cls.ff}>
						<ResponsibleCommandsSubmit isThird isEnd/>
					</div>
				</div>
		
			</Carousel>
			<div className={cls.buttons}>
				<button onClick={handlePrev}>Назад</button>
				<button onClick={handleNext}>Вперед</button>
			</div>
           
		</div>
     
	)
}