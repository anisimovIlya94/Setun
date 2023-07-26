import "./styles/index.scss"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import "shared/config/i18n/i18n"
import { Suspense } from "react"

export const App = () => {
	const { theme } = useTheme()
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="page-wrapper">
					<Sidebar />
					<div className="page-content">
						<AppRouter />
					</div>
				</div>
			</Suspense>
		</div>
	)
}
