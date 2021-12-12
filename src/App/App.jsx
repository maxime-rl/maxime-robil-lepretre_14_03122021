import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";
import ScrollToTop from "../utils/divers/ScrollToTop";
import { NavBar } from "../components";
import GlobalStyle from "../utils/styles/GlobalStyle";
import checkedLocalStorage from "../utils/divers/handleLocalStorage";
import { mockEmployees } from "../utils/data/mockEmployees";

/**
 * @name App
 * @returns {function|object|ReactElement}
 */
function App() {
  /**
   * In the absence of a backend, HRnet app works for the moment with a persistent state in the local storage.
   * If the key: "HRnetEmployeesSession" is not present in the local storage of the user's browser,
   * we push fake employees in local storage
   */
  useEffect(() => {
    const employees = localStorage.getItem("HRnetEmployeesSession");
    checkedLocalStorage(employees, mockEmployees);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <ScrollToTop>
        <Routing />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
