export const saveToLocalStorage = (elt) => {
  let eltsArray = [];

  eltsArray = JSON.parse(localStorage.getItem("session")) || [];
  eltsArray.push(elt);
  localStorage.setItem("session", JSON.stringify(eltsArray));
};
