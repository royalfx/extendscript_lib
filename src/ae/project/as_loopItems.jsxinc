// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.2
 * @date Dec 09 2019
 *  
 * @param {FolderItem} folder 
 * @param {boolean} intoSubfolders Optional
 * @param {Function} func 
 * @param {Array} args Optional
 * @param {Array} filterItemsNames 
 * @param {Array} filterItemsTypes {@link ItemTypeName}
 * @returns {Array}
 */
function as_loopItems(folder, intoSubfolders, func, args, filterItemsNames, filterItemsTypes) {
    
    // Check arguments
    if(args === undefined) {
        args = [];
    }

	// Declare vars
	var results = [],
		item,
		nameMatch,
		typeMatch,
		result;

    // Loop items
    for (var i = 1; i <= folder.numItems; i++) {
        item = folder.item(i);

        // Check
        nameMatch = (filterItemsNames === undefined) || (filterItemsNames.length == 0) || (as_arrayCheckValue(item.name, filterItemsNames) >= 0);
		typeMatch = (filterItemsTypes === undefined) || (filterItemsTypes.length == 0) || (as_arrayCheckValue(as_itemGetType(item), filterItemsTypes) >= 0);
        
        // Du
        if(nameMatch && typeMatch) {
            result = func.apply(undefined, [item].concat(args));
            if(result !== undefined) {
                results.push(result);
            }
        }

        // Subfolders
        if((item instanceof FolderItem) && intoSubfolders) {
            results = results.concat(as_loopItems(item, intoSubfolders, func, args, filterItemsNames, filterItemsTypes));
        }
    }

    return results;
}