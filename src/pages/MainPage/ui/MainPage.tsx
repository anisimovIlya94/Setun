import { Carousel } from "antd"
import { Counter } from "entities/Counter"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { ResponsibleCommandsSubmit } from "shared/ui/ResponsibleCommandsSubmit/ResponsibleCommandsSubmit"
import { ResponsibleCommandsPanel } from "widgets/ResponsibleCommandsPanel"
import cls from "./MainPage.module.scss"
import { ResponsibleCommandsCarousel } from "widgets/ResponsibleCommandsCarousel"

const MainPage = () => {
	const {t} = useTranslation()
	return <div className={cls.mainWrapper}>
		{/* {t("Главная")} */}
		{/* <Counter/> */}
		{/* <Button theme={ButtonTheme.TO_ANIMATION}>
			-
		</Button>
		<Button theme={ButtonTheme.TO_ANIMATION_CLICKED}>
			ГРИ
		</Button> */}
		{/* <Carousel> */}
		{/* <ResponsibleCommandsPanel command="ГРИ" /> */}
		{/* <ResponsibleCommandsSubmit stationNumber={1} /> */}
		{/* <ResponsibleCommandsSubmit stationNumber={1} /> */}
		{/* </Carousel> */}

		{/* <Carousel className={cls.carousel}>
			<ResponsibleCommandsPanel command="ГРИ" />
			<div style={{display: "flex", gap: "20px"}}>
			<ResponsibleCommandsSubmit stationNumber={1} />
			<ResponsibleCommandsSubmit stationNumber={2}/>
		</div>
		<ResponsibleCommandsSubmit isThird/>
    </Carousel> */}
		
		{/* <div style={{display: "flex", gap: "20px"}}>
			<ResponsibleCommandsSubmit stationNumber={1} />
			<ResponsibleCommandsSubmit stationNumber={2}/>
		</div>
		<ResponsibleCommandsSubmit isThird/> */}
		<ResponsibleCommandsCarousel/>
	</div>
}

export default MainPage