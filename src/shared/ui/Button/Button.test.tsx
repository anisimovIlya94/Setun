import { render, screen } from "@testing-library/react"
import { Button, ButtonTheme } from "./Button"

describe("Button", () => {
	test("test render", () => {
		render(<Button>Text</Button>)
		expect(screen.getByText("Text")).toBeInTheDocument()
	})

	test("test clear theme", () => {
		render(<Button theme={ButtonTheme.CLEAR}>Text</Button>)
		expect(screen.getByText("Text")).toHaveClass("clear")
	})
})