/**
 * @description Get month name
 * @param {Date} date
 */
function as_getMonthName(date) {
	var m = date.getMonth();
	var array = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	var name = array[m];
	return name;
    // return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()];
}