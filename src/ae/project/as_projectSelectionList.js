// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @description Returns list of selected items names
 * @param
 * @returns {Array}
 */
function as_projectSelectionList() {

    // FUNC FOR HANDLE COMPS
    function handleItem(item) {
        return item.name;
    }

    // DO
    return as_loopItemsSelection(handleItem);
}