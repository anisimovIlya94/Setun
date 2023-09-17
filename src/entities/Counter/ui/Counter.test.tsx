import { componentRender } from "shared/lib/componentRender/componentRender"
import { Counter } from "./Counter"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { fireEvent, screen } from "@testing-library/react"

describe("Counter", () => {
	test("Counter initialized", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}
		componentRender(<Counter />, {initialState: state})
		expect(screen.getByTestId("value-counter")).toBeInTheDocument()
	})

	test("Counter change after increment button click", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}
		componentRender(<Counter />, { initialState: state })
		const incrementBtn = screen.getByTestId("increment-btn")
		fireEvent.click(incrementBtn)
		expect(screen.getByTestId("value-counter")).toHaveTextContent("11")
	})
	test("Counter change after decrement button click", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}
		componentRender(<Counter />, { initialState: state })
		const decrementBtn = screen.getByTestId("decrement-btn")
		fireEvent.click(decrementBtn)
		expect(screen.getByTestId("value-counter")).toHaveTextContent("9")
	})
})