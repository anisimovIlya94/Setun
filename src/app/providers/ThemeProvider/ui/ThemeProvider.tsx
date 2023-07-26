import { ReactNode, useMemo, useState } from "react"
import {
	Theme,
	ThemeContext,
} from "../lib/ThemeContext"
import { LOCAL_STORAGE_THEME_KEY } from "shared/lib/consts/localStorage"

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT
	)
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
