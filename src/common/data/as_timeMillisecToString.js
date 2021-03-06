// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.3
 * @date Mon Feb 05 2018
 * 
 * @param {number} ms 
 */
function as_timeMillisecToString(ms) {
	var arr = [];
	var msS = 1000;
	var msM = msS * 60;
	var msH = msM * 60;
	var msD = msH * 24;
	var days = Math.floor(ms / msD);
	if (days > 0) {
		arr.push(("000" + days).substr(-3) + " days");
	}
	ms -= days * msD;
	var hours = Math.floor(ms / msH);
	if (hours > 0) {
		arr.push(("00" + hours).substr(-2) + " hours");
	}
	ms -= hours * msH;
	var minutes = Math.floor(ms / msM);
	if (minutes > 0) {
		arr.push(("00" + minutes).substr(-2) + " min");
	}
	ms -= minutes * msM;
	var seconds = Math.floor(ms / msS);
	if (seconds > 0) {
		arr.push(("00" + seconds).substr(-2) + " sec");
	}
	ms -= seconds * msS;
	arr.push(("0000" + Math.floor(ms)).substr(-4) + " ms");
	return arr.join(" ");
}
