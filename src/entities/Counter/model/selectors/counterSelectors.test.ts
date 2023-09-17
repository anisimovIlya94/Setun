import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getCounter, getCounterValue } from "./counterSelectors"

describe("counterSelectors", () => {
	test("test getCounter should return counter", () => {
		const store: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}
		expect(getCounter(store as StateSchema)).toEqual({value: 10})
	})
	test("test getCounterValue should return value", () => {
		const store: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		}
		expect(getCounterValue(store as StateSchema)).toEqual(10)
	})
})