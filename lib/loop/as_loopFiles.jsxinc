// Copyright (c) 2019 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

// version: 1.0.0
// date: Jul 25 2019

/**
 * 
 * @param {Folder} dir 
 * @param {boolean} intoSubfolders 
 * @param {Function} func 
 * @param {array} args 
 * @param {array} filterFilesNames files names
 * @param {array} filterFilesExt files extensions
 */
function as_loopFiles(dir, intoSubfolders, func, args, filterFilesNames, filterFilesExt) {
    
    // CHECK ARGS
    if(args === undefined) {
        args = [];
    }

    // VARS
    var results = [];

    // LOOP
    var arrFiles = dir.getFiles();
    for (var f = 0, file, nameMatch, extMatch, result; f < arrFiles.length; f++) {
        file = arrFiles[f];

        // CHECK IS FILE OR FOLDER
        if((file instanceof Folder) && intoSubfolders) {
            results = results.concat(as_loopFiles(file, intoSubfolders, func, args, filterFilesNames, filterFilesExt));
        } else {

            // CHECK
            nameMatch = (filterFilesNames === undefined) || (filterFilesNames.length == 0) || (as_arrayCheckValue(file.name, filterFilesNames) >= 0);
            extMatch = (filterFilesExt === undefined) || (filterFilesExt.length == 0) || (as_arrayCheckValue(as_getFileExtension(file), filterFilesExt) >= 0);

            // DO
            if(nameMatch && extMatch) {
                result = func.apply(undefined, [file].concat(args));
                if(result !== undefined) {
                    results.push(result);
                }
            }
        }
    }

    // RETURN
    return results;
}