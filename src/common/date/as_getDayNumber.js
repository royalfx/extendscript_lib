/**
 * @description
 * @param {Date} date
 * @returns {number}
 */
function as_getDayNumber(date) {
	return Math.floor(date.getTime() / 8.64e7);
}