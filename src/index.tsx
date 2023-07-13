import { render } from "react-dom";
import { Counter } from "./components/counter";

const rootNode = document.getElementById('root');
render(<Counter/>, rootNode);