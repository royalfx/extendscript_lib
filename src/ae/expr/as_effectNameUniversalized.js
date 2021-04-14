// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// #include "effects.jsxinc";

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @param {*} effect 
 * @returns {boolean} Renamed
 */
function as_effectNameUniversalized(effect) {
    if (effect === null) {
        return false;
    }

    if(!as_propIsEffect(effect)) {
        return new Error("Property \"effect\" is not an effect.");
    }

    // FIND EFFECT DATA
    for (var n = 0; n < ae_effects_matchNames.length; n++) {
        if((ae_effects_matchNames[n] == effect.matchName) && (ae_effects_displayNames[n] == effect.name)) {

            // FIND UNIQUE NAME
            var inx = 1;
            var nameNew;
            var effectsGroup = effect.parentProperty;
            while((nameNew === undefined) || (effectsGroup(nameNew) != null)) {
                nameNew = ae_effects_displayNames[n] + " " + inx;
                inx++;
            }

            // RENAME
            as_elementRename(effect, effect.name, nameNew);
            return true;
        }
    }

    return false;
}
