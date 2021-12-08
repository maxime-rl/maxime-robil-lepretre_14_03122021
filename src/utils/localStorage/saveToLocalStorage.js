/**
 * @name saveToLocalStorage
 * @param {object|array} elt
 * @returns {object|array} create a new array or add an existing object to local storage
 */
export function saveToLocalStorage(elt) {
  let eltsArray = [];
  eltsArray = JSON.parse(localStorage.getItem("HRnetEmployeesSession")) || [];
  eltsArray.push(elt);

  return localStorage.setItem(
    "HRnetEmployeesSession",
    JSON.stringify(eltsArray)
  );
}
