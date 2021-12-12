/**
 * Function to convert date : ISO string -> milliseconds
 * @name dateInMs
 * @param {string} dateInISOString
 * @returns {number}
 */
export default function dateInMs(dateInISOString) {
  return new Date(dateInISOString).valueOf();
}
