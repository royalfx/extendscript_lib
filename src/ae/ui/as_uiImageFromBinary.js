// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Aug 06 2019
 * 
 * @param {string} imageBinary 
 * @param {string} fileName 
 * @param {Folder} dirImages 
 * @param {boolean} rewriteFiles 
 */
function as_uiImageFromBinary(imageBinary, fileName, dirImages, rewriteFiles) {
    var fileImage = File(dirImages.fsName + "/" + fileName);
    if (!fileImage.exists || rewriteFiles) {
        fileImage = as_fileWrite(fileImage, imageBinary, true);
    }
    return ScriptUI.newImage(fileImage);
}