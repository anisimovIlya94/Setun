import { Route, Routes } from "react-router-dom"
import "../index.scss"
import { Suspense } from "react"
import { Link } from "react-router-dom"
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async"
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async"

export const App = () => {
    return (
        <div className="app">
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