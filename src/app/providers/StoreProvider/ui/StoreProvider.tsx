import type { PropsWithChildren, ReactNode } from "react"
import { StateSchema } from "../config/StateSchema"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { DeepPartial } from "@reduxjs/toolkit"

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export function StoreProvider(props: PropsWithChildren<StoreProviderProps>) {
	const { children, initialState } = props

	const store = createReduxStore(initialState as StateSchema)
    
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}