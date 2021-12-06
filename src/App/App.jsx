import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";
import { NavBar } from "../components";
import GlobalStyle from "../utils/styles/GlobalStyle";
import { saveToLocalStorage } from "../utils/localStorage/saveToLocalStorage";
import { mockEmployees } from "../utils/data/mockEmployees";

function App() {
  // Just for test
  if (window.localStorage.length === 0) {
    mockEmployees.forEach((employee) => {
      saveToLocalStorage(employee);
    });
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
