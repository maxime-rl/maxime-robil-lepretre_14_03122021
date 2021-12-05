import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";
import { NavBar } from "../components";
import GlobalStyle from "../utils/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
