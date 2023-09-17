import { render } from "react-dom"
import { App } from "./app/App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./app/providers/ThemeProvider/ui/ThemeProvider"
import { ErrorBoundary } from "app/providers/ErrorBoundary"
import "app/styles/index.scss"

const rootNode = document.getElementById("root")
render(
	<BrowserRouter>
		<ThemeProvider>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</ThemeProvider>
			
	</BrowserRouter>,
	rootNode
)
