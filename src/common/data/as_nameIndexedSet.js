// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

 /**
 // version: 1.0.3
 // date: Mon Feb 05 2018

/**
  * 
  * @description Set name is indexed
  * 
  * @param n {string}
  * @param inx {number}
  * @param len {number}
  * @param delimiter {string}
  * 
  * @return {string} Result name
  */
function as_nameIndexedSet(n, inx, len, delimiter) {
	
	// CHECK ARGS
	delimiter = (delimiter === undefined) ? "_" : delimiter;
	len = (len === undefined) ? 2 : len;

	var splitAt = as_nameIndexedCheck(n);
	if (splitAt > 0) {
		return as_nameIndexedReplace(n, inx, len, delimiter);
	} else {
		return n + delimiter + ("000000000" + inx).substr(-len);
	}
}