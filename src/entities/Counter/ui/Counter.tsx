import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/counterSelectors"

export function Counter() {
	const dispatch = useDispatch()
	const handleIncrement = () => {
		dispatch(counterActions.increment())
	}
	const handleDecrement = () => {
		dispatch(counterActions.decrement())
	}
	const value = useSelector(getCounterValue)
	return (
		<div>
			<h1 data-testid="value-counter">value: {value}</h1>
			<button data-testid="increment-btn" onClick={handleIncrement}>increment</button>
			<button data-testid="decrement-btn" onClick={handleDecrement}>decrement</button>
		</div>
	)
}