/**
 * @name capitalizeFirstLetter
 * @param {string} string
 * @returns {string}
 */
export default function capitalizeFirstLetter(string) {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
