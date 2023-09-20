import { Counter } from "entities/Counter"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { ResponsibleCommandsSubmit } from "shared/ui/ResponsibleCommandsSubmit/ResponsibleCommandsSubmit"
import { ResponsibleCommandsPanel } from "widgets/ResponsibleCommandsPanel"

const MainPage = () => {
	const {t} = useTranslation()
	return <div>
		{t("Главная")}
		{/* <Counter/> */}
		{/* <Button theme={ButtonTheme.TO_ANIMATION}>
			-
		</Button>
		<Button theme={ButtonTheme.TO_ANIMATION_CLICKED}>
			ГРИ
		</Button> */}
		<ResponsibleCommandsPanel command="ГРИ" />
		<div style={{display: "flex", gap: "20px"}}>
			<ResponsibleCommandsSubmit stationNumber={1} />
			<ResponsibleCommandsSubmit stationNumber={2}/>
		</div>
		<ResponsibleCommandsSubmit isThird/>
	</div>
}

export default MainPage