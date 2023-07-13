import { useState } from "react"
import cls from "./counter.module.scss"

export const Counter = () => {
    const [state, setState] = useState(0)
    const increment = () => {
        setState(state + 1)
    }
    return (
        <>
            <h1>{state}</h1>
            <button className={cls.btn} onClick={increment}>increment</button>
        </>
    )
}