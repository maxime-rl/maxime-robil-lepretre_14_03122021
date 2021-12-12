/**
 * @name saveToLocalStorage
 * @param {object|array} data
 * @returns {object|array} create a new array or add an existing object to local storage
 */
export const saveToLocalStorage = (data) => {
  let dataArray = [];
  dataArray = JSON.parse(localStorage.getItem("HRnetEmployeesSession")) || [];
  dataArray.push(data);

  return localStorage.setItem(
    "HRnetEmployeesSession",
    JSON.stringify(dataArray)
  );
};

/**
 * Function to check if the user's local storage contains HRnet data,
 * if not, we push the data
 * @name checkedLocalStorage
 * @param {array} employees
 * @param {array} mockEmployees
 */
export default function checkedLocalStorage(employees, mockEmployees) {
  if (!employees) {
    mockEmployees.forEach((employee) => {
      saveToLocalStorage(employee);
    });
  }
}
