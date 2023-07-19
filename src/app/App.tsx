import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classnames/classnames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
