import { counterActions, counterReducer } from "./counterSlice"
import { CounterSchema } from "../types/counter"

describe("counterSelectors", () => {
	test("test counterReducer increment", () => {
		const store: CounterSchema = {
			value: 10
		}
		expect(counterReducer(store, counterActions.increment)).toEqual({value: 11})
	})
	test("test counterReducer decrement", () => {
		const store: CounterSchema = {
			value: 10
		}
		expect(counterReducer(store, counterActions.decrement)).toEqual({value: 9})
	})
	test("test counterReducer undefined state", () => {
		expect(counterReducer(undefined, counterActions.increment)).toEqual({value: 1})
	})
})