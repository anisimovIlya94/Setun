import { useState, useEffect } from "react"
import { Button } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"

// component for testing ErrorBoundary
export function BugButton() {
	const [error, setError] = useState(false)
	const {t} = useTranslation()
	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])
	const throwError = () => {
		setError(true)
	}
	return (
		<Button onClick={throwError}>
			{t("Создать ошибку")}
		</Button>
	)
}