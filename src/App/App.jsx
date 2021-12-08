import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";
import { NavBar } from "../components";
import GlobalStyle from "../utils/styles/GlobalStyle";
import { saveToLocalStorage } from "../utils/localStorage/saveToLocalStorage";
import { mockEmployees } from "../utils/data/mockEmployees";

/**
 * @name App
 * @returns {function|object|ReactElement}
 */
function App() {
  const employees = localStorage.getItem("HRnetEmployeesSession");

  /**
   * In the absence of a backend, HRnet app works for the moment with a persistent state in the local storage.
   * If the key: "HRnetEmployeesSession" is not present in the local storage of the user's browser,
   * we push fake employees in local storage
   */
  if (!employees) {
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
