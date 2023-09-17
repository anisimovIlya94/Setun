import { ReactNode, useMemo, useState } from "react"
import {
	Theme,
	ThemeContext,
} from "../lib/ThemeContext"
import { LOCAL_STORAGE_THEME_KEY } from "shared/lib/consts/localStorage"

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: Theme
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
	const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
	const defaultProps = useMemo(() => {
		return {
			theme,
			setTheme,
		}
	}, [theme])
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
