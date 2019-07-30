#includepath "/d/Google Drive/Adobe Scripting/extendscript_lib/common/file";
#include "as_fileWrite.jsxinc";

// var strLic = "COPYRIGHT TEXT";
// var dirLib = Folder("/d/Google Drive/Adobe Scripting/extendscript_lib");
// var dirs = dirLib.getFiles();
// for (var d = 0, dir; d < dirs.length; d++) {
//     dir = dirs[d];
//     if(dir instanceof Folder) {
//         var files = dir.getFiles("*.jsxinc");
//         for (var f = 0, file; f < files.length; f++) {
//             file = files[f];
//             var strCode = as_fileRead(file);
//             if(strCode.indexOf(strLic) == -1) {
//                 strCode = strLic + "\n\n" + strCode;
//                 as_fileWrite(file, strCode, false);
//             }
//         }
//     }
// }