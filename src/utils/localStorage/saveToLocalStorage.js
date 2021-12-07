export const saveToLocalStorage = (elt) => {
  let eltsArray = [];

  eltsArray = JSON.parse(localStorage.getItem("HRnetEmployeesSession")) || [];
  eltsArray.push(elt);
  localStorage.setItem("HRnetEmployeesSession", JSON.stringify(eltsArray));
};
