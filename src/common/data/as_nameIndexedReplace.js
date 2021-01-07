// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
  * @version 1.0.3
  * @date Mon Feb 05 2018
  * 
  * @description Replace name is indexed
  * 
  * @param n {string}
  * @param inx {number}
  * @param len {number}
  * @param delimiter {string}
  * 
  * @return {string} Result name
  */
function as_nameIndexedReplace(n, inx, len, delimiter) {
	
	// Check arguments
	delimiter = (delimiter === undefined) ? "_" : delimiter;
	len = (len === undefined) ? 2 : len;

	var splitAt = as_nameIndexedCheck(n);
	if (splitAt > 0) {
		return n.substr(0, splitAt + 1) + ("000000000" + inx).substr(-len);
	} else {
		return n;
	}
}
