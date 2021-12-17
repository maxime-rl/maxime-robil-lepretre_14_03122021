/**
 * Function to convert date : ISO string -> milliseconds
 * @name dateInMs
 * @param {string} dateInISOString
 * @returns {number}
 */
export default function dateInMs(date) {
  if (typeof date === "string") {
    return new Date(date).valueOf();
  }
}
