import { Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { Suspense, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classnames"

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback="loading...">
                <Routes>
                    <Route path="/" element={<MainPageAsync/>} />
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}