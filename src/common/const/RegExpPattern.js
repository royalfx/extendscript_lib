// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date 29 Aug 2019
 */
function RegExpPattern(){
	//
}

RegExpPattern.NUMBERS = /[^0-9]/g;
RegExpPattern.NUMBERS_NO_ZERO = /[^1-9]/g;
RegExpPattern.NUMBERS_MINUS = /[^0-9\-]/g;
RegExpPattern.NUMBERS_DOT = /[^0-9\.]/g;
RegExpPattern.NUMBERS_DOT_MINUS = /[^0-9\.-]/g;
RegExpPattern.NUMBERS_DOT_AUTO = /[^0-9\.auto]/g;
RegExpPattern.NUMBERS_CHARS = /[^a-zA-Z0-9]/g;
RegExpPattern.NUMBERS_CHARS_HASH = /[^a-zA-Z0-9+\#]/g;
RegExpPattern.NUMBERS_CHARS_SPACE = /[^a-zA-Z0-9\ ]/g;
RegExpPattern.CHARS = /[^a-zA-Z]/g;
RegExpPattern.CHARS_SPACE = /[^a-zA-Z\ ]/g;

/**
 * @public
 * @static
 * @returns {Array}
 */
RegExpPattern.getList = function() {
	return [
		RegExpPattern.NUMBERS,
		RegExpPattern.NUMBERS_NO_ZERO,
		RegExpPattern.NUMBERS_MINUS,
		RegExpPattern.NUMBERS_DOT,
		RegExpPattern.NUMBERS_DOT_MINUS,
		RegExpPattern.NUMBERS_DOT_AUTO,
		RegExpPattern.NUMBERS_CHARS,
		RegExpPattern.NUMBERS_CHARS_HASH,
		RegExpPattern.NUMBERS_CHARS_SPACE,
		RegExpPattern.CHARS,
		RegExpPattern.CHARS_SPACE
	];
}