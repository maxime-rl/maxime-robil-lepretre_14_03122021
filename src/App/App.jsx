import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";
import { NavBar } from "../components";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
