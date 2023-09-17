import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { counterReducer } from "entities/Counter/model/slice/counterSlice"

export function createReduxStore(initialState?: StateSchema) {

	const rootReducers = combineReducers({
		counter: counterReducer
	})

	const store = configureStore({
		reducer: rootReducers,
		preloadedState: initialState,
		devTools: __IS_DEV__
	})
    
	return store
}