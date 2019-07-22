#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/file";
#include "as_fileWrite.jsxinc";

var dirLib = Folder("/d/Google Drive/Adobe Scripting/ae_scripts/lib");
var dirs = dirLib.getFiles();
var lines = [];
for (var d = 0, dir; d < dirs.length; d++) {
    dir = dirs[d];
    if(dir instanceof Folder) {
        lines.push("\n// " + dir.displayName.toUpperCase());
        lines.push("#includepath \"" + dir.path + "\";");
        var files = dir.getFiles("*.jsxinc");
        for (var f = 0, file; f < files.length; f++) {
            file = files[f];
            lines.push("#include \"" + file.displayName + "\";");
        }
    }
};
var fileInclude = File(dirLib.fsName + "/" + "include.jsx");
as_fileWrite(fileInclude, lines.join("\n"), false);
fileInclude.execute();