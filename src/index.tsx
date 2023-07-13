import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const rootNode = document.getElementById('root');
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , rootNode);