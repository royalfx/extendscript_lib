// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.1
 * @date Jul 17 2019
 * 
 * @param str {string} String to copy
 */
function as_copyToClipboard(str) {
	system.callSystem("cmd.exe /c cmd.exe /c \"echo " + str + " | clip\""); 
}