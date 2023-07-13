import { useState } from "react"
import "./counter.scss"

export const Counter = () => {
    const [state, setState] = useState(0)
    const increment = () => {
        setState(state + 1)
    }
    return (
        <>
            <h1>{state}</h1>
            <button onClick={increment}>increment</button>
        </>
    )
}